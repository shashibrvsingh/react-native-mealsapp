import { View, Text, StyleSheet, Button } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { useSelector } from "react-redux";
function ViewPdf() {
  return (
    <View>
      <Text>
        <Button>
          <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
            View Pdf
          </a>
        </Button>
      </Text>
    </View>
  );
}

export default ViewPdf;
