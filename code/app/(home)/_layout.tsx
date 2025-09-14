import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#e67e22" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Recipes" }} />
      <Stack.Screen name="recipe" options={{ title: "Recipe Details" }} />
    </Stack>
  );
}
