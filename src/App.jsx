import {  Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DayBoardingBenefits from "./pages/DayBoardingBenefits";
import TestSeries from "./pages/TestSeries";
import NeetTestSeries from "./pages/NeetTestSeries";
import React, { useEffect } from "react";
import Lenis from 'lenis';
import RegistorForm from "./pages/RegistorForm";
import Dashboard from "./dashboard/Dashboard";
import Login from "./dashboard/Login";
import { useAuth } from './auth/AuthContext.jsx';
import BlogDetail from "./pages/BlogDetail.jsx";
import Blog from "./pages/Blog.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const { isAuthenticated } = useAuth();
  
   useEffect(() => {
  
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day-boarding-benefits" element={<DayBoardingBenefits />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/neet-test-series" element={<NeetTestSeries />} />
          <Route path="/register" element={<RegistorForm />} />
          <Route path="/form" element={<RegistorForm />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route
            path="/login"
            element={
              isAuthenticated
                ? <Navigate to="/dashboard" replace />
                : <Login />
            }
          />
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated
                ? <Dashboard />
                : <Navigate to="/login" replace />
            }
          />
        </Routes>
    </div>
  );
};

export default App;
