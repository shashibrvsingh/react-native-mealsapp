import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    console.log(`Line no:13   ${itemData.item.title}`);
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        id={itemData.item.id}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default MealsList;
