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
    ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { leafWhiteBackgroundImage, logo } from "../assets/images";
import SearchBar from "../components/SearchBar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cuisine } from "../models/Cuisine";
import CuisineCell from "../components/cells/CuisineCell";
import { CONST } from "../utils/Constants";

const HomeScreen = ({ navigation }) => {
    const [cuisineList, setCuisineList] = useState([cuisines]);
    const [searchQuery, setSearchQuery] = useState('');

    const itemWidth = (CONST.screenWidth - 18 * 2 - 15) / 2
    const itemhHeight = itemWidth * 4/3

    const handleSearch = (query: string) => {
        // Do something with the search query, like filter a list of items
        setSearchQuery(query);
    }

    const cuisines = [
        new Cuisine("1", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("2", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("3", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("4", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("5", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("6", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("7", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
        new Cuisine("8", "Cuisine", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", 100),
    ]

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={leafWhiteBackgroundImage}>
            <SafeAreaView>
            <ScrollView style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <SearchBar onSearch={handleSearch} />
                
                <FlatList
                style={styles.flatlist}
                data={cuisines}
                renderItem={({item}) => <CuisineCell cuisine={item} style={{width: itemWidth}}/>}
                keyExtractor={(item) => item.id}
                numColumns={2}
                getItemLayout={(data, index) => ({
                    length: itemhHeight,
                    offset: itemhHeight * index,
                    index  
                })}
                />
            </ScrollView>
            </SafeAreaView>

        </ImageBackground>
    )
}

export default HomeScreen;

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
    logo: { 
        marginLeft: 10,
        marginTop: 40,
        marginBottom: 20,
    },
    searchBar: {
        flex: 1,
    },
    flatlist: {
        marginTop: 30
    }
})