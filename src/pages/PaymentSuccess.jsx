import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 w-full overflow-hidden">
      <Navbar />

      <section className="min-h-[80vh] px-4 py-10 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-8 text-white text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-12 h-12" />
                </div>
              </div>
              <h1 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
                Payment Successful
              </h1>
              <p className="mt-2 text-emerald-100 max-w-xl mx-auto">
                Thank you! Your registration payment has been received successfully.
              </p>
            </div>

            {/* Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-sm text-emerald-800">
                    A confirmation message will be shared shortly on your email and WhatsApp with your admit details.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">Email Updates</p>
                      <p className="font-semibold text-gray-900">Check your inbox/spam folder</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp Updates</p>
                      <p className="font-semibold text-gray-900">You will receive a confirmation on WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Next Steps</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Note your exam date and reach on time.</li>
                    <li>Keep your ID and confirmation message handy.</li>
                    <li>For any help, contact our team.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:justify-center mt-4">
                  <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg"
                  >
                    Go to Home
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Need help? Email support@edukulclasses.com or WhatsApp our helpline.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
