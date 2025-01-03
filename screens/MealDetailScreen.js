import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../store/context/redux/favourites";

function MealDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  // const favouriteMealContext = useContext(FavouritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavourite = favouriteMealContext.ids.includes(mealId);
  const mealIsFavourite = favouriteMealsIds.includes(mealId);
  function changeFavouriteStatusHandler() {
    console.log("first line");
    console.log("pressed");
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));

      // favouriteMealContext.removeFavourite(mealId);
    } else {
      dispatch(addFavourite({ id: mealId }));
      // favouriteMealContext.addFavourite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="#41c519"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  console.log(selectedMeal);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.imageStyle}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  outerContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  imageStyle: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  detailText: {
    color: "white",
  },
});

export default MealDetailScreen;
