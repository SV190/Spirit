// App.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MatchCard, { MatchProps } from "@/components/MatchCard"; // Путь к файлу MatchCard
import GameColors from "@/constants/Colors"; // Импортируем цвета для игр

const matches: MatchProps[] = [
  {
    id: "1",
    team1: "Liquid",
    team2: "OG",
    score: "2 - 1",
    tournament: "ESL One Bangkok 2024",
    logo1: require("@/assets/images/teams/TL.png"),
    logo2: require("@/assets/images/teams/og.png"),
    game: "Dota2", // Пример игры
    date: "2024-10-27",
  },
  {
    id: "2",
    team1: "Falcons",
    team2: "Spirit",
    score: "1 - 0",
    tournament: "ESL One Bangkok 2024",
    logo1: require("@/assets/images/teams/tf.png"),
    logo2: require("@/assets/images/teams/ts.png"),
    game: "LoL", // Пример игры
    date: "2024-10-27",
  },
  {
    id: "3",
    team1: "NaVi",
    team2: "VP",
    score: "1 - 0",
    tournament: "ESL One Bangkok 2024",
    logo1: require("@/assets/images/teams/NaVi.webp"),
    logo2: require("@/assets/images/teams/VP.webp"),
    game: "CSGO", // Пример игры
    date: "2024-10-27",
  },
  {
    id: "4",
    team1: "Avulus",
    team2: "Tundra",
    score: "18:45",
    tournament: "ESL One Bangkok 2024",
    logo1: require("@/assets/images/teams/Avulus.webp"),
    logo2: require("@/assets/images/teams/Tundra.webp"),
    game: "Valorant", // Пример игры
    date: "2024-10-27",
  },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Matchs");

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Esports</Text>

      <View style={styles.tabsContainer}>
        {["Matchs", "Tournaments"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab as any)}
          >
            <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Results</Text>
      <FlatList
        data={matches}
        renderItem={({ item }) => <MatchCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 16,
    marginBottom: 15,
    marginTop: 35,
    color: "#235d3a",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  tab: {
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: "gray",
  },
  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "#235d3a",
    color: "#235d3a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    color: "#235d3a",
  },
});
