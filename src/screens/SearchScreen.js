import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../../hooks/useResults";
import ResultsList from "../component/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState("");

    const [searchAPI,results,error]=useResults()


    return (
        <View style={styles.container}>
            <Text>Home Page Of 1st App</Text>
            {error?<Text>{error}</Text>:null}
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchAPI(term)}/>
            <Text> We but have received {results.length} Results Sahan</Text>
            <ResultsList title/>
            <ResultsList/>
            <ResultsList/>
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
        },

    }
)

export default SearchScreen;