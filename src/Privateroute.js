// src/components/PrivateRoute.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";



const PrivateRoutes = ({...rest }) => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    return isAuthenticated ? (
        <>
           {/* login data */}
           <Outlet/>
        </>
    ) : (

        <Navigate to="/" />

    );
};

export default PrivateRoutes;
