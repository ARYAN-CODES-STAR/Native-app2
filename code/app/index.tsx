import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const recipes = [
  { id: "1", title: "Spaghetti Carbonara" },
  { id: "2", title: "Chicken Curry" },
  { id: "3", title: "Paneer Butter Masala" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>🍲 Recipe List</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/recipe/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 15, marginBottom: 10, backgroundColor: "#f4511e", borderRadius: 8 },
  cardText: { color: "#fff", fontSize: 18 },
});
