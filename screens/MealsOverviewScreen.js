import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  console.log(MEALS);
  const catId = route.params.categoryId;
  console.log(`Line no: 8 `);
  console.log(catId);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    console.log(`Line no:13   ${itemData.item.title}`);
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      <Text>{route.params.categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default MealsOverviewScreen;
