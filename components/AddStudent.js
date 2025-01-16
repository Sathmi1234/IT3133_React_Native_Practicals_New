import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const navigation = useNavigation();

    const handleAddStudent = () => {
        const newStudent = {
            id: Date.now().toString(),
            name,
            age,
            gender,
            phone,
            email,
            blood_group: bloodGroup
        };
        navigation.navigate("StudentList", { newStudent });
    };

    return (
        <View style={styles.container}>
            <TextInput mode="outlined" label="Name" value={name} onChangeText={setName} />
            <TextInput mode="outlined" label="Age" value={age} onChangeText={setAge} keyboardType="number-pad" />
            <TextInput mode="outlined" label="Gender" value={gender} onChangeText={setGender} />
            <TextInput mode="outlined" label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <TextInput mode="outlined" label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput mode="outlined" label="Blood Group" value={bloodGroup} onChangeText={setBloodGroup} />
            <Button onPress={handleAddStudent}>Add Student</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
