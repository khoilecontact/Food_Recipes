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
    ActivityIndicator,
    ViewStyle
} from "react-native";
import React, { useState } from "react";
import { Cuisine } from "../../models/Cuisine";
import { mediumOrange, white } from "../../assets/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

interface CuisineCellInterface {
    cuisine: Cuisine,
    onCellTapped?: () => void,
    style: ViewStyle
}

const CuisineCell = (props: CuisineCellInterface) => {
    return (
        <TouchableOpacity onPress={props.onCellTapped} style={[styles.container, props.style]}> 
            <Image source={{ uri: props.cuisine.imageUrl }} style={styles.image} />

            <Text style={styles.title}>{props.cuisine.name}</Text>

            <View style={styles.timeContainer}>
                <Icon
                    name="clock-o"
                    size={15}
                    color={mediumOrange}
                    style={styles.clockIcon} />

                <Text style={styles.timeText}>{props.cuisine.time}min</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        color: mediumOrange,
        fontSize: 18,
        fontWeight: '400',
        marginTop: 16
    },
    timeContainer: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    clockIcon: {
        marginRight: 5,
        height: 14,
        width: 14,
        marginBottom: 10
    },
    timeText: {
        fontSize: 12,
        fontWeight: '200',
        color: '#7CB518',
        marginBottom: 10
    }
});

export default CuisineCell;