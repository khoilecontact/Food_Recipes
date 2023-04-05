import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { white } from '../../assets/colors';
import { lineBackgroundImage, hideIcon, showIcon } from '../../assets/images';
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";
import { generalStyles } from '../../assets/generalStyles';
import FieldText from "../../components/FieldText";
import PrimaryButton from "../../components/PrimaryButton";

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={lineBackgroundImage}>
                <BackButton onButtonClicked={() => { navigation.goBack() }} />
                <TitleText
                    style={generalStyles.title}
                    text="Input Your Sign In Info"
                />

                <FieldText text="Email" style={[generalStyles.fieldText, { marginTop: 120 }]} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={[generalStyles.textInput, { flex: 1 }]}
                        placeholder="example@gmail.com"
                        value={email}
                        onChangeText={(newText: string) => {
                            setEmail(newText)
                        }} />
                </View>

                <FieldText text="Password" style={[generalStyles.fieldText, { marginTop: 40 }]} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={[generalStyles.textInput, { width: 260 }]}
                        secureTextEntry={!isShowPassword}
                        value={password}
                        onChangeText={(newText: string) => {
                            setPassword(newText)
                        }}
                        placeholder="Your Password" />

                    <TouchableOpacity onPress={toggleShowPassword}>
                        <Image
                            style={styles.toggleButton}
                            source={
                                isShowPassword
                                    ? showIcon
                                    : hideIcon
                            }
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Sign In" style={styles.logInButton}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignInScreen;

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
    },
    textInputContainer: {
        borderBottomWidth: 1,
        marginHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toggleButton: {
        width: 20,
        height: 20,
        marginTop: 25,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 80,
        marginHorizontal: 30
      },
    logInButton: {
        marginHorizontal: 30
    }
})