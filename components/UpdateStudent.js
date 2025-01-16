import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function UpdateStudent({ route }) {
    const navigation = useNavigation();
    const { student } = route.params; // Access student from route props

    const [name, setName] = useState(student.name);
    const [age, setAge] = useState(student.age.toString());
    const [gender, setGender] = useState(student.gender);
    const [phone, setPhone] = useState(student.phone);
    const [email, setEmail] = useState(student.email); 
    const [bloodGroup, setBloodGroup] = useState(student.blood_group);

    const handleUpdate = () => {
        const updatedStudent = {
            ...student,
            name,
            age,
            gender,
            phone,
            email,
            blood_group: bloodGroup,
        };

        // Pass updated student back to Profile
        navigation.navigate("Profile", { student: updatedStudent });
    };

    return (
        <View style={styles.container}>
            <TextInput mode="outlined" label="Name" value={name} onChangeText={setName} />
            <TextInput mode="outlined" label="Age" value={age} onChangeText={setAge} keyboardType="number-pad" />
            <TextInput mode="outlined" label="Gender" value={gender} onChangeText={setGender} />
            <TextInput mode="outlined" label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <TextInput mode="outlined" label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput mode="outlined" label="Blood Group" value={bloodGroup} onChangeText={setBloodGroup} />
            <Button onPress={handleUpdate}>Update Student</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
