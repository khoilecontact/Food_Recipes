import React from 'react';
import { white, mediumOrange } from '../assets/colors';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle
} from 'react-native';

interface PrimaryButtonProps {
    title?: String,
    style: ViewStyle,
    onButtonClicked?: () => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onButtonClicked}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        backgroundColor: mediumOrange,
        height: 56,
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 2,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13}
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: white,
        fontWeight: '600'
    }
})