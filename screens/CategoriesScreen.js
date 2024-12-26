import { useState } from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      console.log(`Line no: 9th `);
      console.log(itemData);
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressHandler={onPressHandler}
      />
    );
  }

  const [numColumns, setNumColumns] = useState(2); // Start with 2 columns
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={numColumns}
      key={numColumns}
    />
  );
}

export default CategoriesScreen;
