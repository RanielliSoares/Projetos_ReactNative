import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



import Home from "../pages/Home";
import Clientes from "../pages/Clientes";
import Faturamento from "../pages/Faturamento";

const Tab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "#aa1963",
                tabBarInactiveTintColor: "#121212",
                tabBarInactiveBackgroundColor: "#e7e7e7",

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => {
                        return <Entypo name="home" size={32} color={'#aa1963'} />
                    }
                }}
            />
            <Tab.Screen
                name="Clientes"
                component={Clientes}
                options={{

                    tabBarLabel: 'Clientes',
                    tabBarIcon: () => {
                        return <FontAwesome name="address-book" size={24} color="#aa1963" />

                    }
                }}
            />
            <Tab.Screen
                name="Faturamento"
                component={Faturamento}
                options={{
                    tabBarLabel: 'Faturas',
                    tabBarIcon: () => {
                        return <FontAwesome name="vcard" size={24} color="#aa1963" />
                    }
                }}
            />
        </Tab.Navigator>

    );
}
export default AppRoutes;