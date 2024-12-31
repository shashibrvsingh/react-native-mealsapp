import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 3,
    padding: 3,
    marginHorizontal: 70,
    marginVertical: 5,
  },
  subTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    padding: 6,
    textAlign: "center",
  },
});

export default Subtitle;
