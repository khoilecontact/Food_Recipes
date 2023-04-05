import { StyleSheet } from 'react-native'
import { darkGray } from './colors';

export const generalStyles = StyleSheet.create({
    title: {
        marginLeft: 20,
        marginTop: 30
    },
    fieldText: {
        marginLeft: 40,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        fontSize: 20,
        color: darkGray,
        fontWeight: '400',
    },
})