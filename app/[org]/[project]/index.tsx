import { router, useLocalSearchParams } from "expo-router";
import { use } from "react";
import { Button, Text, View } from "react-native";

import { LayoutProject } from "../../../project-context";

export default function Project() {
  const { org, project } = useLocalSearchParams<{ org: string; project: string }>();
  const layout = use(LayoutProject);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text>{`layout: ${layout}`}</Text>
      <Text>{`screen: ${org}/${project}`}</Text>
      <Button title="Go to acme/api" onPress={() => router.navigate("/acme/api")} />
    </View>
  );
}
