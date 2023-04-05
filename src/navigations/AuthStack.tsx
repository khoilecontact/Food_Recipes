import React from "react";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import SignInScreen from '../screens/Auth/SignInScreen';

import {
    createStackNavigator,
    TransitionPresets
} from "@react-navigation/stack";

const Screens = createStackNavigator();

const AuthStack = () => {
    return (
        <Screens.Navigator>
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
        </Screens.Navigator>
    )
}

export default AuthStack;