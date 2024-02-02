import React, { useContext } from "react";
import { Text, View } from 'react-native';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

export default function Routes() {

    const { signed } = useContext(AuthContext)
    const loading = false;

    return (
        signed ? <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>
    );
}
