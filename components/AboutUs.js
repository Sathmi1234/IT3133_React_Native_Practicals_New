import { Image, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";

export default function AboutUs() {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Image
                    style={styles.about}
                    source={require('../assets/about_us.jpg')}
                />
                <Text variant="headlineLarge">Let's Get to Know</Text>
                <Divider />
                <Text variant="bodyMedium">
                    Hiii
                    Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                    To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.        
                </Text>
                <Button mode="outlined">
                    About Us
                </Button>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    about:{
        width:300,
        height:300
    },
    body: {
        padding: 8,
        textAlign: 'justify'
    },
    scrollView: {
        flexGrow: 1,
    },
});