import React, { useState, createContext, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [fishesData, setFishesData] = useState({
    fishes: [],
    orders: [],
    families: [],
  });

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fishesCollection = await getDocs(collection(db, "fishes"));
        const ordersCollection = await getDocs(collection(db, "orders"));
        const familiesCollection = await getDocs(collection(db, "families"));

        const fishes = fishesCollection.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const orders = ordersCollection.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const families = familiesCollection.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFishesData({ fishes, orders, families });
      } catch (error) {
        console.log(error);
        // TODO  hacer un setFishesData con null y a eso leerlo en las pantallas para indicar algun mensaje de que hubo un error de carga
      }
    };
    getOrders();
  }, []);

  return (
    <StateContext.Provider value={fishesData}>{children}</StateContext.Provider>
  );
};

export default StateContext;
