import MealItem from "../components/MealList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Category from "../models/category";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  console.log(MEALS);
  const catId = route.params.categoryId;
  console.log(`Line no: 8 `);
  console.log(catId);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default MealsOverviewScreen;
