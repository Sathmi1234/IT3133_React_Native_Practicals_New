import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet} from "react-native";
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider} from "react-native-safe-area-context";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'tomato'}}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Contact" component={ContactUs}/>
            <Stack.Screen name="About" component={AboutUs}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    padding: 5,
    textAlign: "justify",
    color: 'black'
  }
});
