import React from "react";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';

import {
    createStackNavigator,
    TransitionPresets
} from "@react-navigation/stack";

const Screens = createStackNavigator();

const AuthStack = () => {
    return (
        <Screens.Navigator>
            <Screens.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Screens.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Screens.Screen
                name="Sign In"
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Screens.Screen
                name="Sign Up"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Screens.Navigator>
    )
}

export default AuthStack;