import { StyleSheet } from "react-native";
import { Divider,Text, Button } from 'react-native-paper';

export default function Home(){
    return(
        <>
            <Text variant="headlineLarge" style={{ color: 'black' }}>Headline Large</Text>
            <Divider/>
            <Text variant="titleMedium" style={{ color: 'black' }}>Title Medium</Text>
            <Text variant="bodyMedium" style={styles.body}>
            React Native is an open-source framework developed by Facebook 
            for building mobile applications using JavaScript and React. 
            It allows developers to create cross-platform apps for 
            iOS and Android with a single codebase, leveraging native 
            components for high performance and a seamless user experience.
            
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>

            <Divider/>

            React Native is an open-source framework developed by Facebook 
            for building mobile applications using JavaScript and React. 
            It allows developers to create cross-platform apps for 
            iOS and Android with a single codebase, leveraging native 
            components for high performance and a seamless user experience.
            
            <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            </Text>
        </  >
    )
}
const styles = StyleSheet.create({
    body: {
      padding: 5,
      textAlign: "justify",
      color:'black'
    }
  });