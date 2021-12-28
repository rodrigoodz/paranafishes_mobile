import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import getImagesByName from "../helpers/getImagesByName";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const SECTIONS = [
  {
    title: "FAQ",
    content: [
      { type: "text", payload: "No encuentro un pez en la lista" },
      {
        type: "text",
        payload:
          "Es posible que alguna especie de río buscada no se encuentre entre los peces añadidos a la aplicación. Esto se debe a que la gran mayoría de peces y su correspondiente información proviene del artículo mencionado en 'Agradecimientos'.",
      },
      {
        type: "text",
        payload: "¿Se planea agregar nuevas especies en el futuro?",
      },
      {
        type: "text",
        payload:
          "Es probable que con el paso del tiempo se agreguen nuevas especies de río junto a su correspondiente información.",
      },
      { type: "text", payload: "¿Se añadirán especies del mar?" },
      {
        type: "text",
        payload:
          "No, la idea de la aplicación es tener un registro de peces del Río Paraná, dejando de lado aquellos que no son de 'agua dulce'.",
      },
    ],
  },
  {
    title: "Agradecimientos",
    content: [
      { type: "text", payload: "Se agradece a:" },
      {
        type: "text",
        payload:
          "Serra, S.; Loureiro, M.; Clavijo, C.; Alonso, F.; Scarabino, F. y Ríos, N. (2019). Peces del bajo Río Uruguay - Especies destacadas.",
      },
      { type: "text", payload: "" },
      {
        type: "text",
        payload:
          "Gracias al material se pudo añadir gran cantidad de información sobre las especies mencionadas en la aplicación.",
      },
    ],
  },

  {
    title: "Anatomía de los peces",
    content: [
      {
        type: "image",
        payload: "anatomia",
      },
    ],
  },
];

const MyAccordion = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section) => {
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          borderRadius: 8,
          padding: 5,
          marginTop: 5,
        }}
      >
        <Text
          style={{ color: colors.textPrimary, fontSize: fonts.size.font16 }}
        >
          {section.title}
        </Text>
      </View>
    );
  };
  const renderContent = (section) => {
    return (
      <View
        style={{
          backgroundColor: colors.cardColor,
          padding: 5,
          marginLeft: 5,
          marginRight: 5,
          borderBottomEndRadius: 8,
          borderBottomStartRadius: 8,
        }}
      >
        {section.content.map((s, idx) => (
          <View key={idx}>
            {s.type === "text" ? (
              <Text
                style={{
                  fontWeight: idx % 2 === 0 ? "bold" : "normal",
                  textAlign: "justify",
                }}
              >
                {s.payload}
              </Text>
            ) : (
              <View
                style={{
                  backgroundColor: "#D4E0E9",
                }}
              >
                <Image
                  source={getImagesByName(s.payload)}
                  resizeMode="contain"
                  style={{ width: "100%" }}
                />
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };

  const updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      touchableComponent={TouchableOpacity}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
      align="center"
      renderAsFlatList
    />
  );
};

export default MyAccordion;
