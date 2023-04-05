import React, { useEffect, useState } from "react";
import { splashIcon, lineBackgroundImage } from '../assets/images';
import { white } from '../assets/colors';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
} from "react-native";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 1000);

        return () => clearTimeout(timer)
    }, [navigation]);

    return(
        <View style={styles.container}>
            <ImageBackground
            style={styles.backgroundImage}
            source={lineBackgroundImage}
            >
                <Image
                style={styles.icon}
                source={splashIcon}
                />
            </ImageBackground>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginHorizontal: 30
    }
})