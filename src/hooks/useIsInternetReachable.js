import { useEffect, useState } from "react";
import * as Network from "expo-network";

// customHook para verificar si hay conexion a internet.

export default function useIsInternetReachable() {
  const [isInternetReachable, setIsInternetReachable] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        const networkState = await Network.getNetworkStateAsync();

        setIsInternetReachable(
          networkState ? networkState.isInternetReachable : false
        );
      } catch (e) {
        // Alert.alert("useIsInternetReachable error:", e.message);
        console.log(e);
      }
    }

    init();
  }, []);

  return isInternetReachable;
}
