import React from 'react';
import { darkGray, mediumGray } from '../assets/colors';
import {
    Text,
    StyleSheet,
    ViewStyle
} from 'react-native';

interface FieldTextProps {
    text: String,
    style?: ViewStyle
}

const FieldText = (props: FieldTextProps) => {
    return(
        <Text style={[styles.text, props.style]}>{props.text}</Text>
    )
}

export default FieldText;

const styles = StyleSheet.create({
    text: {
        color: mediumGray,
        fontSize: 20
    }
})