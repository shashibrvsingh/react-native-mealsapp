import { View, Text } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";

function FavoritesScreen() {
  const favoiriteMealContext = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favoiriteMealContext.ids.includes(meal.id)
  );
  return <MealsList items={favouriteMeals} />;
}

export default FavoritesScreen;
