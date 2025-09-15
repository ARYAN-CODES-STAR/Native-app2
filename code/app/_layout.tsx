import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";


export default function RootLayout() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      {/* Status bar customization */}
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
