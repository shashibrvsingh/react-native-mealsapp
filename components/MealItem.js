import { View, Text, Pressable, StyleSheet, Image } from "react-native";
function MealItem({ title, imageUrl }) {
  console.log(title);
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text></Text>
        </View>
        <View>
          <Text>DURATION</Text>
          <Text>COMPLEXCITY</Text>
          <Text>AFFORDABILITY</Text>
        </View>
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
});

export default MealItem;
