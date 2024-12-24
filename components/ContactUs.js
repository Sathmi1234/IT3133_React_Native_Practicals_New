import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Text, TextInput, Button } from "react-native-paper";

export default function ContactUs() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleInputChange = (field, value) => {
        setUserDetails({ ...userDetails, [field]: value });
    };

    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge" style={{ color: 'black' }}>Contact Us</Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <Text variant='bodyMedium'>
                    React Native is an open-source framework developed by Facebook 
                    for building mobile applications using JavaScript and React. 
                    It allows developers to create cross-platform apps for 
                    iOS and Android with a single codebase, leveraging native 
                    components for high performance and a seamless user experience.
                </Text>
                <View style={styles.input}>
                    <TextInput 
                        label="Name" 
                        mode='outlined' 
                        value={userDetails.name} 
                        onChangeText={(value) => handleInputChange("name", value)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        label="Email" 
                        mode='outlined' 
                        keyboardType="email-address" 
                        value={userDetails.email} 
                        onChangeText={(value) => handleInputChange("email", value)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        label="Phone Number" 
                        mode='outlined' 
                        keyboardType='phone-pad' 
                        value={userDetails.phoneNumber} 
                        onChangeText={(value) => handleInputChange("phoneNumber", value)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        label="Message" 
                        mode='outlined' 
                        multiline 
                        numberOfLines={5} 
                        value={userDetails.message} 
                        onChangeText={(value) => handleInputChange("message", value)}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <Text>User Details:</Text>
                <Text>Name: {userDetails.name}</Text>
                <Text>Email: {userDetails.email}</Text>
                <Text>Phone Number: {userDetails.phoneNumber}</Text>
                <Text>Message: {userDetails.message}</Text>
                <Text>My App @2024</Text>
            </View>
            <View>
                <Button mode="outlined"></Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: "100%",
        alignItems: 'center',
        padding: 8,
        marginBottom: 6
    },
    body: {
        flex: 5,
        width: "100%"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        padding: 8
    },
    input: {
        padding: 8,
        marginBottom: 7
    }
});

