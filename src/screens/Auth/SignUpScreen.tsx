import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { white } from '../../assets/colors';
import { lineBackgroundImage, hideIcon, showIcon } from '../../assets/images';
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";
import { generalStyles } from '../../assets/generalStyles';
import FieldText from "../../components/FieldText";
import PrimaryButton from "../../components/PrimaryButton";
import { FirebaseManager } from '../../utils/Firebase';
import { AsyncStorageManager } from "../../utils/AsyncStorage";
import { CONST } from "../../utils/Constants";

const SignUpScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [sex, setSex] = useState('Male');

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleSignUp = () => {
        setLoading(true);
        FirebaseManager.signUp(name, email, password)
            .then((user) => {
                // User signed up successfully
                AsyncStorageManager.save(CONST.USER_NAME, user.name)
                AsyncStorageManager.save(CONST.USER_EMAIL, user.email)
            })
            .catch((error) => {
                Alert.alert('Error', error)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={lineBackgroundImage}>
            <ScrollView style={styles.container}>
                <BackButton onButtonClicked={() => { navigation.goBack() }} />
                <TitleText
                    style={generalStyles.title}
                    text="Input Your Sign Up Info"
                />

                <FieldText text="Name" style={[generalStyles.fieldText, { marginTop: 60 }]} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={[generalStyles.textInput, { flex: 1 }]}
                        placeholder="Your Name"
                        value={name}
                        onChangeText={(newText: string) => {
                            setName(newText)
                        }} />
                </View>


                <FieldText text="Email" style={[generalStyles.fieldText, { marginTop: 30 }]} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={[generalStyles.textInput, { flex: 1 }]}
                        placeholder="example@gmail.com"
                        value={email}
                        onChangeText={(newText: string) => {
                            setEmail(newText)
                        }} />
                </View>

                <FieldText text="Password" style={[generalStyles.fieldText, { marginTop: 30 }]} />
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

                <FieldText text="Sex" style={[generalStyles.fieldText, { marginTop: 30 }]} />
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={sex}
                        onValueChange={(itemValue, _) => {
                            setSex(itemValue)
                        }}>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title="Sign Up"
                        style={styles.signUpButton}
                        onButtonClicked={handleSignUp}
                    />
                </View>

                {loading && (
                    <View style={styles.overlay}>
                        <ActivityIndicator size='large' color={white} />
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        minHeight: '100%',
    },
    backgroundImage: {
        flexGrow: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
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
    pickerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    signUpButton: {
        marginHorizontal: 30
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})