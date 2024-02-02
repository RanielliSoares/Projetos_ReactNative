import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={Signin}
                options={{
                    headerShown:false
                }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title:'Cadastrar'
                }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;