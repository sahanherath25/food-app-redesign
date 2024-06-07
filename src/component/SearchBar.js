import React  from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const SearchBar = ({term,onTermChange,onTermSubmit}) => {


    const handleSearch = (term) => {
        onTermChange((prevState) => {
            console.log(term)
            return term

        })

    }

    return (
        <View style={styles.background}>
            <AntDesign style={styles.iconStyle} name="search1" size={30} color="black"/>
            <TextInput value={term}
                       onChangeText={handleSearch}
                       style={styles.input}
                       placeholder={"Type Your Name"}
                       placeholderTextColor={"#000"}
                       autoCorrect={false}
                       autoCapitalize={"none"}
                       onSubmitEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        background: {
            backgroundColor: "#d5d5d5",
            height: 50,
            // borderColor: "#000",
            // borderStyle: "solid",
            // borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 15,
            flexDirection: "row",
        },
        iconStyle: {
            alignSelf: "center",
            fontSize:35,
            marginHorizontal:15,
        },
        input: {
            marginLeft: 10,
            flex: 1,
            // borderColor:"#f30707",
            // borderStyle:"solid",
            // borderWidth:1,
        }
    }
)

export default SearchBar;