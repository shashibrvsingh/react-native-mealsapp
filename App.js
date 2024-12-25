import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
