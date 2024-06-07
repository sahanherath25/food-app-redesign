import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Search"} component={SearchScreen}
                              options={{
                                  title: "Search Screen",
                                  headerBackTitle: "Back",
                                  // headerStyle: { backgroundColor: 'lightblue' },
                                  headerTintColor: '#1E0342',
                                  headerTitleAlign: "center"
                              }}
                />
                <Stack.Screen name={"Detail"} component={SearchScreen}/>
            </Stack.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ab6565',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
