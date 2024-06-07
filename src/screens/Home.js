import React from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../component/SearchBar";
import {StatusBar} from "expo-status-bar/build/StatusBar";

const DetailScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            borderColor:"red",
            borderStyle:"dashed",
            borderWidth:1
        }
    }
)

export default DetailScreen;