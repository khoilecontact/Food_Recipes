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
    backgroundColor?: string,
    backColor?: string,
    onButtonClicked?: () => void
}

const BackButton = (props: BackButtonProps) => {
    const backgroundColor = props.backgroundColor ?? mediumOrange
    const backColor = props.backColor ?? white
    
    return(
        <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]} onPress={props.onButtonClicked}>
            <Icon name='arrow-left' size={15} color={backColor}/>
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
    }
})
