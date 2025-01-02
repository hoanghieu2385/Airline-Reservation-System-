// src/routes/ClientRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/client/HomePage";
import Policies from "../pages/client/Policies";
import CustomerDetail from "../pages/client/CustomerDetail";
import ClientLayout from "../layouts/ClientLayout";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import ClientDashboard from "../pages/client/ClientDashboard";
import SearchResults from "../pages/client/SearchResults";
import Payment from "../pages/client/Payment";
import Success from "../pages/client/Success";
import ForgotPasswordPage from "../components/common/ForgotPasswordPage";
import ResetPasswordPage from "../components/common/ResetPasswordPage";
import Eticket from '../pages/client/Eticket';
import FAQ from "../pages/client/FAQs";

function ClientRoutes() {
    return (
        <ClientLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/customerdetail" element={<CustomerDetail />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/customerdetail" element={<CustomerDetail/>}/>
                <Route path="/user/dashboard" element={<ClientDashboard />} />
                <Route path="/results" element={<SearchResults />} />
                <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
                <Route path="/reset-Password" element={<ResetPasswordPage />} />
                <Route path="/eticket" element={<Eticket />} />
                <Route path="/faqs" element={<FAQ />} />
            </Routes>
        </ClientLayout>
    );
}

export default ClientRoutes;
