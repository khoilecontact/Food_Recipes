import React from 'react';
import { white, mediumOrange } from '../assets/colors';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle
} from 'react-native';

interface TransparentButtonProps {
    title?: String,
    style?: ViewStyle,
    onButtonClicked?: () => void
}

const TransparentButton = (props: TransparentButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onButtonClicked}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default TransparentButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: white,
        height: 56
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: mediumOrange
    }
})