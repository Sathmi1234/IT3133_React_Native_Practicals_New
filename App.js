import { StyleSheet, View} from "react-native";
import StudentList from "./components/StudentList";
import StudentListDb from "./components/StudentListDb";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Profile";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

export default function Index() {
  const Stack=createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StudentList" component={StudentListDb}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Add" component={AddStudent}/>
          <Stack.Screen name="UpdateStudent" component={UpdateStudent} />

        </Stack.Navigator>  
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})

