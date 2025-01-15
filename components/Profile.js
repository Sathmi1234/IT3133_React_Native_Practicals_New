import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Profile({route}){
    const {student} = route.params;
    return(
        <View>
            <Text>Name: {student.name}</Text>
            <Text>Age: {student.age}</Text>
            <Text>Gender: {student.gender}</Text>
            <Text>Phone: {student.phone}</Text>
            <Text>Email: {student.email}</Text>
            <Text>Blood Group: {student.blood_group}</Text>
            <Image style={{height:300,width:300}} source={student.profile_pic}/>
        </View>
    )
}