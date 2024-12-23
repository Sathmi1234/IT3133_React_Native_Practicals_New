import { StyleSheet, View , ScrollView} from "react-native";
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";

export default function Index() {
  return (
    <PaperProvider>
      <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Home/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      </SafeAreaView>
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
    color:'black'
  }
});
