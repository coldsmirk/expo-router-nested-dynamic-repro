import { Stack, useLocalSearchParams } from "expo-router";

import { LayoutProject } from "../../../project-context";

export default function ProjectLayout() {
  const { org, project } = useLocalSearchParams<{ org: string; project: string }>();

  return (
    <LayoutProject.Provider value={`${org}/${project}`}>
      <Stack />
    </LayoutProject.Provider>
  );
}
