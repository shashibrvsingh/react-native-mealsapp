import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoiriteMealContext = useContext(FavouritesContext);

  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no any favourites meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 34,
  },
  text: { fontSize: 34 },
});
export default FavoritesScreen;
