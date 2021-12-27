import React from "react";
import Navigation from "./src/routes/Navigation";
import { StateProvider } from "./StateContext";

export default function App() {
  return (
    <StateProvider>
      <Navigation />
    </StateProvider>
  );
}
