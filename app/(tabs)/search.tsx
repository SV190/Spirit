import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const popularSearches = [
    "League of Legends World Championship",
    "G2 Esports",
    "T1",
    "Sentinels",
    "100 Thieves",
    "Faze Clan",
    "Ninja",
    "TimTheTatman",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backArrow}></Text>
        <Text style={styles.headerText}>Search</Text>
        <Text style={styles.settingsIcon}></Text>
      </View>

      <LinearGradient
        // Цвета для градиента, чтобы создать эффект внутренней тени
        colors={["#d9d9d9", "#bcbcbc"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.inputContainer}
      >
        {/* Контейнер для иконки и TextInput */}
        <View style={styles.searchContainer}>
          <Image
            source={require("@/assets/images/Search.png")} // Замените на правильный путь к иконке
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for esports content..."
            placeholderTextColor="#4d4d4d"
          />
        </View>
      </LinearGradient>

      <Text style={styles.popularSearchesTitle}>Popular searches</Text>
      <ScrollView contentContainerStyle={styles.popularSearchesContainer}>
        {popularSearches.map((search, index) => (
          <TouchableOpacity key={index} style={styles.searchTag}>
            <Text style={styles.searchTagText}>{search}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  backArrow: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    marginHorizontal: 16,
    color: "#235d3a",
  },
  settingsIcon: {
    fontSize: 24,
  },
  inputContainer: {
    width: "100%",
    height: 50,
    borderRadius: 13,
    padding: 1.1,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#d9d9d9",
  },
  // Новый стиль для контейнера с иконкой и TextInput
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    height: "100%",
    paddingLeft: 16,
    paddingRight: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  popularSearchesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#235d3a",
    marginVertical: 15,
  },
  popularSearchesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchTag: {
    backgroundColor: "#235d3a",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
  },
  searchTagText: {
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  footerIcon: {
    fontSize: 24,
  },
});
