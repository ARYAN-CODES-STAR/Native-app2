import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const recipeDetails: Record<string, string> = {
  "1": "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  "2": "Chicken Curry is a flavorful dish made with chicken simmered in a spiced curry sauce.",
  "3": "Paneer Butter Masala is a rich and creamy curry made with paneer, butter, and tomatoes.",
};

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipe Details</Text>
      <Text style={styles.content}>
        {recipeDetails[id ?? ""] || "Recipe not found!"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
});
