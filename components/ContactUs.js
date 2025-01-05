import { KeyboardAvoidingView,StyleSheet, Platform, View ,ScrollView} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function ContactUs(){
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS==='ios'?'padding':'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text variant="headlineLarge">
                            You are in Contact Us Screen
                        </Text>
                    </View>
                    <View style={styles.body}>
                        <Text variant='bodyMedium'>
                            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                            To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                            Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                            Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
                            Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
                        </Text>
                        <View style={styles.input}>
                            <TextInput label="Name" mode='outlined' />
                        </View>
                        <View style={styles.input}>
                            <TextInput label="Email" mode='outlined' keyboardType='email-address' />
                        </View>
                        <View style={styles.input}>
                            <TextInput label="Phone number" mode='outlined' keyboardType='phone-pad' />
                        </View>
                        <View style={styles.input}>
                            <TextInput label="Message" mode='outlined' multiline numberOfLines={5} />
                        </View>
                        <View style={styles.input}>
                            <Button mode='contained'>Contact</Button>
                        </View>
                        <Text></Text>
                    </View>
                    <View style={styles.footer}>
                        <Text>MyApp © 2024</Text>
                    </View>
                    <Button mode="outlined" >
                        Go To Home
                    </Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    header: {
        alignItems: 'center',
    },
    body: {
        flex: 5,
        width: "100%"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center'
    },
    input: {
        padding: 8,
        marginBottom: 7
    },
    scrollView: {
        flexGrow: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
      }
});