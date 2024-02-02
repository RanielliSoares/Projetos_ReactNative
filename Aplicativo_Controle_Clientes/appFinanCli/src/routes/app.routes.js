import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../pages/Home";
import Clientes from "../pages/Clientes";

const Tab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Clientes"
                component={Clientes}
            />
        </Tab.Navigator>
    );
}
export default AppRoutes;