import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function AddStudent(){
    const [name,setName] = useState();
    const newStudent = {
        name:name,
        id:'1234',
        age:20
    }
    const navigation = useNavigation()
    return(
        <View>
            <TextInput mode='outlined' label='Name' value={name} onChangeText={setName}/>
            <Button onPress={()=>
            navigation.popTo('StudentList',{newStudent})}>
                Add
            </Button>
        </View>
    )
}