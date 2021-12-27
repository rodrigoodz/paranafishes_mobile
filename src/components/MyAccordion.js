import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const SECTIONS = [
  {
    title: "FAQ",
    content: [
      "No encuentro un pez en la lista",
      "Es posible que alguna especie de río buscada no se encuentre entre los peces añadidos a la aplicación. Esto se debe a que la gran mayoría de peces y su correspondiente información proviene del artículo mencionado en 'Agradecimientos'.",
      "¿Se planea agregar nuevas especies en el futuro?",
      "Es probable que con el paso del tiempo se agreguen nuevas especies de río junto a su correspondiente información.",
      "¿Se añadirán especies del mar?",
      "No, la idea de la aplicación es tener un registro de peces del Río Paraná, dejando de lado aquellos que no son de 'agua dulce'.",
    ],
  },
  {
    title: "Agradecimientos",
    content: [
      "Se agradece a:",
      "Serra, S.; Loureiro, M.; Clavijo, C.; Alonso, F.; Scarabino, F. y Ríos, N. (2019). Peces del bajo Río Uruguay - Especies destacadas.",
      "",
      "Gracias al material se pudo añadir gran cantidad de información sobre las especies mencionadas en la aplicación.",
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
            <Text
              style={{
                fontWeight: idx % 2 === 0 ? "bold" : "normal",
                textAlign: "justify",
              }}
            >
              {s}
            </Text>
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
    />
  );
};

export default MyAccordion;
