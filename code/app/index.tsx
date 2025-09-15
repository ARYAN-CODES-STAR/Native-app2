import { useColorScheme, Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  const scheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        scheme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text
        style={scheme === "dark" ? styles.darkText : styles.lightText}
      >
        Welcome to Recipe App ({scheme} mode)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  lightContainer: { backgroundColor: "#fff" },
  darkContainer: { backgroundColor: "#121212" },
  lightText: { color: "#121212", fontSize: 20 },
  darkText: { color: "#fff", fontSize: 20 },
});
