import { StyleSheet, View, ScrollView, KeyboardAvoidingView,Platform } from "react-native";
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

export default function Index() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <KeyboardAvoidingView behavior={Platform.OS ==='ios' ? padding:'heights'}>
            <ScrollView>
              <View style={styles.container}>
                <ContactUs />
                <StatusBar style="auto" />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
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
    color: 'black'
  }
});
