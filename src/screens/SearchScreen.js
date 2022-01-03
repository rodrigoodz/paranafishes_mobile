import React, { useContext, useState } from "react";
import { View, Text, TextInput, StatusBar } from "react-native";
import colors from "../theme/colors";
import ScrollList from "../components/ScrollList";
import removeAccents from "../helpers/removeAccents";
import Title from "../components/Title";
import StateContext from "../../StateContext";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const { fishes } = useContext(StateContext);

  const handleSearch = () => {
    if (searchText.length !== 0) {
      const lowerCaseSearch = searchText.toLowerCase();
      // retorno peces que tienen como nombre cientifico o nombre comun el texto de busqueda
      const data = fishes.filter((fish) => {
        if (
          fish.scientificName.toLowerCase().includes(lowerCaseSearch) ||
          fish.commonName.findIndex((name) => {
            const nameWithoutAccents = removeAccents(name.toLowerCase());
            return nameWithoutAccents.includes(lowerCaseSearch);
          }) !== -1
        ) {
          return fish;
        }
      });
      if (data.length === 0) {
        return setErrorMessage("No se encontraron resultados");
      } else {
        setErrorMessage("");
        setResults(data);
      }
    }
  };

  const handleInput = (newText) => {
    setSearchText(newText);
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <Title text="Buscar" />
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          padding: 5,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <TextInput
          onChangeText={handleInput}
          value={searchText}
          maxLength={50}
          placeholder="Ingresar texto de busqueda"
          placeholderTextColor={colors.secondary}
          style={{ color: "black" }}
          onBlur={handleSearch}
          returnKeyType={"search"}
        />
      </View>
      <View style={{ flex: 1, marginBottom: 10 }}>
        {errorMessage.length > 0 && (
          <Text
            style={{
              textAlign: "center",
              color: colors.secondary,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            {errorMessage}
          </Text>
        )}
        {errorMessage.length === 0 && searchText.length > 0 && (
          <ScrollList data={results} />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
