import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    ImageBackground
} from "react-native";
import React, { useState } from "react";
import { white, boldOrange, boldGreen, lightGreen } from '../../assets/colors';
import PrimaryButton from "../../components/PrimaryButton";
import TransparentButton from "../../components/TransparentButton";
import { greenLeafBackgroundImage } from '../../assets/images';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={greenLeafBackgroundImage} style={styles.backgroundImage} >
                <View style={styles.childContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80' }} style={styles.image} />
                    </View>
                    <PrimaryButton title="Sign Up" style={styles.signUpButton} />
                    <TransparentButton
                        title="Already have an account"
                        style={styles.signInButton}
                        onButtonClicked={() => { navigation.navigate("Sign In") }} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightGreen,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    childContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: white,
        borderRadius: 10,
        marginTop: 200,
        marginBottom: 200,
        marginHorizontal: 20
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 150,
        borderRadius: 20,
        overflow: 'hidden',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    signUpButton: {
        marginLeft: 28,
        marginRight: 28,
        marginTop: 30,
    },
    signInButton: {
        marginLeft: 28,
        marginRight: 28,
        marginTop: 16,
        marginBottom: 22
    }
})