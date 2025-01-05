import { StyleSheet, View, ScrollView, KeyboardAvoidingView,Platform } from "react-native";
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView>

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
