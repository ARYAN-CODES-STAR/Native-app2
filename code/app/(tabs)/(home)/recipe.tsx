import { View, Text, StyleSheet } from "react-native";

export default function RecipeDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍝 Pasta Recipe</Text>
      <Text>Ingredients: Pasta, Tomatoes, Garlic, Olive Oil</Text>
      <Text>Steps: Boil pasta → Make sauce → Mix & serve hot.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
