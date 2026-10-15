import { Link } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="/acme/web">Open acme/web</Link>
    </View>
  );
}
