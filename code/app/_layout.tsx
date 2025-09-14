
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Load the tab navigator as the root */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
