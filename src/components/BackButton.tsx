import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { white, mediumOrange } from '../assets/colors';

interface BackButtonProps {
    onButtonClicked?: () => void
}

const BackButton = (props: BackButtonProps) => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onButtonClicked}>
            <Icon name='arrow-left' size={15} color={white}/>
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 20,
        backgroundColor: mediumOrange
    }
})
