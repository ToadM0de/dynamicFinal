import { Tabs, Redirect } from "expo-router";
import { useAuth } from "../../src/auth/AuthContext";

export default function TabsLayout() {
  const { user, loading } = useAuth();
  if (!loading && !user) return <Redirect href="/(auth)/sign-in" />;
  return (
    <Tabs screenOptions={{ headerTitleAlign: "center" }}>
      <Tabs.Screen name="index" options={{ title: "Shopping List" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
