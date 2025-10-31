import React, { useState, useRef, useMemo } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

const initialForm = {
  title: "",
  author: "",
  image: "",
  desc: "",
  fullContent: "",
  category: "",
  tags: [],
  isScheduled: false,
  scheduledFor: "",
};

const categories = [
  "NEET Preparation",
  "JEE Preparation",
  "Other",
];

const editorToolbarButtons = "bold,underline,italic,strikethrough,|,ul,ol,|,fontsize,brush,|,link,image,|,left,center,right,justify,|,undo,redo,|,eraser,fullsize,?";

const CreateBlog = () => {
  const [form, setForm] = useState(initialForm);
  const [imagePreview, setImagePreview] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
	const editorConfig = useMemo(() => ({
		readonly: false,
		height: 300,
		toolbarSticky: false,
		buttons: editorToolbarButtons,
		placeholder: "Write your full blog content here...",
	}), []);



  const handleChange = (e) => {
    if (e.target.name === "tags") {
      const tagValue = e.target.value.trim();
      if (tagValue && !form.tags.includes(tagValue)) {
        setForm({ ...form, tags: [...form.tags, tagValue] });
        e.target.value = "";
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    setUploadingImage(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
      
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/imagekit/upload`, {
          file: reader.result,
          fileName: file.name,
        });
        if (res.data && res.data.success) {
          setForm((prev) => ({ ...prev, image: res.data.url }));
          setImagePreview(res.data.url);
          toast.success("Image uploaded successfully!");
        } else {
          toast.error("Image upload failed");
        }
      } catch (err) {
        toast.error("Image upload failed");
        console.error("Error uploading image:", err);
      } finally {
        setUploadingImage(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    } else {
      setForm((prev) => ({ ...prev, image: "" }));
      setImagePreview("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Validate scheduled date if scheduling is enabled
      if (form.isScheduled && !form.scheduledFor) {
        toast.error("Please select a date and time for scheduling");
        setSaving(false);
        return;
      }

      const formData = {
        ...form,
        date: new Date().toLocaleDateString("en-GB"),
        // Convert scheduledFor to ISO string if it exists
        scheduledFor: form.scheduledFor ? new Date(form.scheduledFor).toISOString() : null,
      };


      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/blogpage/`, formData);
      if (res.data && res.data.success) {
        toast.success(form.isScheduled 
          ? "Blog scheduled successfully!" 
          : "Blog created successfully!");
        setForm(initialForm);
        setImagePreview("");
      }
    } catch (err) {
      console.error("Error saving blog:", err);
      const errorMessage = err.response?.data?.message || "Could not create blog.";
      toast.error(errorMessage);
    } finally {
      setSaving(false);
    }
  };



  const removeTag = (indexToRemove) => {
    setForm({
      ...form,
      tags: form.tags.filter((_, index) => index !== indexToRemove),
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-purple-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              Create New Blog Post
            </h2>
            <p className="text-gray-500">
              Fill the form to add a new blog post.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short Description *
              </label>
              <input
                name="desc"
                value={form.desc}
                onChange={handleChange}
                placeholder="Enter short description"
                className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {form.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="text-purple-600 hover:text-purple-800 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                name="tags"
                type="text"
                placeholder="Type a tag and press Enter"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleChange(e);
                  }
                }}
                className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
              />
            </div>
            
          

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-purple-200 p-2 rounded w-full"
                disabled={uploadingImage}
              />
              {uploadingImage && (
                <div className="text-sm text-purple-600 flex items-center gap-2 mt-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Uploading image...
                </div>
              )}
              {imagePreview && (
                <div className="relative mt-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
			<label className="block text-sm font-medium text-gray-700 mb-2">
				Full Content *
			</label>
			<JoditEditor
				value={form.fullContent}
				onChange={(newContent) => setForm({ ...form, fullContent: newContent })}
				config={editorConfig}
			/>
          </div>
  <div className="mt-4">
              <div className="flex items-center mb-2">
                <input
                  id="isScheduled"
                  name="isScheduled"
                  type="checkbox"
                  checked={form.isScheduled}
                  onChange={(e) => setForm({ ...form, isScheduled: e.target.checked })}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="isScheduled" className="ml-2 block text-sm font-medium text-gray-700">
                  Schedule this blog for later publication
                </label>
              </div>
              
              {form.isScheduled && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Schedule Date and Time *
                  </label>
                  <input
                    type="datetime-local"
                    name="scheduledFor"
                    value={form.scheduledFor}
                    onChange={handleChange}
                    className="border border-purple-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                    required={form.isScheduled}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    The blog will be automatically published at the scheduled time.
                  </p>
                </div>
              )}
            </div>
          <div className="col-span-1 md:col-span-2 flex gap-4">
            <button
              type="submit"
              disabled={saving || uploadingImage}
              className={`px-8 py-3 rounded font-semibold transition-colors duration-200 shadow-md ${
                saving || uploadingImage
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-800"
              }`}
            >
              {saving ? "Saving..." : "Create Blog"}
            </button>
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setImagePreview("");
              }}
              disabled={saving}
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-md"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>

      {/* Preview Section */}
      {form.title && (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
          <h3 className="text-2xl font-bold mb-6">Preview</h3>
          <div className="border border-purple-200 rounded-lg p-6 bg-gray-50">
            <div className="flex items-center gap-6 mb-4">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt={form.title}
                  className="w-24 h-24 object-cover rounded border"
                />
              )}
              <div>
                <div className="text-sm text-purple-700 font-medium mb-1">
                  {form.category}
                </div>
                <div className="font-bold text-xl text-[#181A2A] mb-1">
                  {form.title}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {new Date().toLocaleDateString("en-GB")} | {form.author}
                  {form.isScheduled && form.scheduledFor && (
                    <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                      Scheduled for: {new Date(form.scheduledFor).toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-gray-700 mb-2">
                  {form.desc}
                </div>
                {form.tags && form.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {form.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {form.fullContent && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Content Preview:</h4>
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: form.fullContent }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
