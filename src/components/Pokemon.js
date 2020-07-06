import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import image from "../images/images.png";

const Pokemons = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image source={image} style={{ width: 400, height: 80 }} />
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={(value) => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <Text style={styles.text}>
        Pokémon is a role-playing game based around building a small team of
        monsters to battle other monsters in a quest to become the best. Pokémon
        are divided into types,such as water and fire, each with different
        strengths. Use the Advanced Search to explore Pokémon
      </Text>

      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate("Details", {
                      pokemon: pokemon.name,
                    })
                  }
                >
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    display: "flex",
    alignItems: "center",
    borderBottomColor: "black",
  },
  searchCont: {
    position: "absolute",
    marginBottom: 70,
    left: "20%",
    zIndex: 1,
    marginTop: 230,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    width: 250,
    borderRadius: 50,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  text: {
    marginHorizontal: 20,
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});
