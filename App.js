import React from "react";
import useIsInternetReachable from "./src/hooks/useIsInternetReachable";
import Navigation from "./src/routes/Navigation";
import { StateProvider } from "./StateContext";
import ErrorScreen from "./src/screens/ErrorScreen";

export default function App() {
  // Si no hay conexion a internet, muestro pantalla error
  const isInternetReachable = useIsInternetReachable();

  if (isInternetReachable === null) {
    return null;
  } else if (isInternetReachable === false) {
    return <ErrorScreen />;
  }

  return (
    <StateProvider>
      <Navigation />
    </StateProvider>
  );
}
