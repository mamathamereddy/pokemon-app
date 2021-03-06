import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View>
      <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="searchTerm"
          value={term}
          onChangeText={(newTerm) => onTermChange(newTerm)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
