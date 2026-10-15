# expo-router: navigating between two `[org]/[project]` routes

Reproduction for https://github.com/expo/expo/issues/51569.

`app/[org]/[project]/_layout.tsx` is a Stack, so the root Stack has one route for both segments, named `[org]/[project]`. Navigating from `/acme/web` to `/acme/api` keeps the `acme/web` layout and renders the `acme/api` screen inside it.

```sh
npm install
npm test      # fails: the layout still says acme/web
npm run web   # open /acme/web, press "Go to acme/api"
```
