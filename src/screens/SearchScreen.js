import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SearchBar from "../components/SearchBar.js";
import image from "../images/images.png";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      <Image source={image} style={{ width: 400, height: 80 }} />
      <Text
        style={{
          marginHorizontal: 15,
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 10,
        }}
      >
        Pokémon is a role-playing game based around building a small team of
        monsters to battle other monsters in a quest to become the best. Pokémon
        are divided into types,such as water and fire, each with different
        strengths. Use the Advanced Search to explore Pokémon
      </Text>
      <SearchBar
        term={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
      />
      <Text>{searchTerm}</Text>
      <Text>Search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
