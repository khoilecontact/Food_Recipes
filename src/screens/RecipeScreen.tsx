import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import { logo } from "../assets/images";

const RecipeScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <BackButton 
            backgroundColor='rgb(255, 255, 255, 0.8)'
            backColor='#7CB518'
            />

            <Image source={logo} style={styles.logo}/>

            <View style={styles.recipeView}>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        minHeight: '100%',
    },
    backButton: {
         marginLeft: 14,
         marginTop: 14,
    },
    logo: { 
        marginLeft: 10,
        marginTop: 40,
        marginBottom: 20,
    },
    recipeView: {
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
        borderRadius: 20
    }
})

export default RecipeScreen;