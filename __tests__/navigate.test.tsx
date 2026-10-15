import { router } from "expo-router";
import { act, renderRouter, screen } from "expo-router/testing-library";

test("navigating to another [org]/[project] renders it under its own layout", async () => {
  await renderRouter("./app", { initialUrl: "/acme/web" });
  expect(screen.getByText("layout: acme/web")).toBeTruthy();

  await act(() => router.navigate("/acme/api"));

  expect(screen.getByText("screen: acme/api")).toBeTruthy();
  expect(screen.getByText("layout: acme/api")).toBeTruthy();
});
