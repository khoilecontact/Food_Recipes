import React from 'react';
import { darkGray } from '../assets/colors';
import {
    Text,
    StyleSheet,
    ViewStyle
} from 'react-native';

interface TitleTextProps {
    text: String,
    style?: ViewStyle
}

const TitleText = (props: TitleTextProps) => {
    return(
        <Text style={[styles.text, props.style]}>{props.text}</Text>
    )
}

export default TitleText;

const styles = StyleSheet.create({
    text: {
        color: darkGray,
        fontSize: 25,
        fontWeight: '600'
    }
})
