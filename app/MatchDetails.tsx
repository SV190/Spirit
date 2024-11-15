import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import MatchCard from "@/components/MatchCard";

export default function MatchDetails() {
  const route = useRoute();
  const { matchData } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Match Info */}
      <View style={styles.matchInfo}>
        <View style={styles.teamInfo}>
          <Image source={matchData.logo1} style={styles.teamLogo} />
          <Text style={styles.teamRank}>#41</Text>
        </View>
        <View style={styles.matchDetails}>
          <Text
            style={styles.matchTitle}
          >{`${matchData.team1} vs ${matchData.team2}`}</Text>
          <Text style={styles.matchStage}>Групповой этап 2</Text>
          <Text style={styles.liveText}>Live</Text>
          <Text style={styles.scoreText}>{matchData.score}</Text>
          <Text style={styles.matchFormat}>Bo5</Text>
          <Image source={matchData.game} style={styles.gameIcon} />
          <View style={styles.tournamentInfo}>
            <Text style={styles.tournamentName}>{matchData.tournament}</Text>
          </View>
        </View>
        <Image source={matchData.logo2} style={styles.teamLogo} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Stats</Text>
        <Text style={styles.tab}>Tundra</Text>
        <Text style={styles.tab}>Spirit</Text>
      </View>

      {/* Map 1 */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Map1</Text>
        <Text style={styles.mapTime}>31:19</Text>
        <Text style={styles.mapScore}>
          <Text style={styles.greenScore}>31</Text> :{" "}
          <Text style={styles.redScore}>31</Text>
        </Text>

        {/* Players */}
        <View style={styles.players}>
          <View style={styles.teamColumn}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <View key={index} style={styles.player}>
                  <Image
                    source={require("@/assets/images/teams/ts.png")}
                    style={styles.playerIcon}
                  />
                  <View>
                    <Text style={styles.playerName}>Miposhka</Text>
                    <Text style={styles.playerStats}>12/10/25</Text>
                    <Text style={styles.playerGold}>123890</Text>
                  </View>
                </View>
              ))}
          </View>
          <View style={styles.teamColumn}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <View key={index} style={styles.player}>
                  <Image
                    source={require("@/assets/images/teams/ts.png")}
                    style={styles.playerIcon}
                  />
                  <View>
                    <Text style={styles.playerName}>Miposhka</Text>
                    <Text style={styles.playerStats}>12/10/25</Text>
                    <Text style={styles.playerGold}>123890</Text>
                  </View>
                </View>
              ))}
          </View>
        </View>

        {/* Bans */}
        <View style={styles.bans}>
          <Text style={styles.bansTitle}>Bans</Text>
          <View style={styles.banIcons}>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Image
                  key={index}
                  source={require("@/assets/images/teams/ts.png")}
                  style={styles.banIcon}
                />
              ))}
          </View>
        </View>
      </View>

      {/* Map 2 */}
      <View style={styles.mapSummary}>
        <Text style={styles.mapTitle}>Map2</Text>
        <View style={styles.mapScoreSummary}>
          <Image
            source={require("@/assets/images/teams/ts.png")}
            style={styles.teamLogoSmall}
          />
          <Text style={styles.mapScoreText}>0 - 1</Text>
          <Image
            source={require("@/assets/images/teams/ts.png")}
            style={styles.teamLogoSmall}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backIcon: {
    marginRight: 10,
    color: "#000",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  matchInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  teamLogo: {
    width: 67,
    height: 75,
    marginHorizontal: 10,
  },
  teamInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  teamRank: {
    fontSize: 14,
    color: "#888",
  },
  matchDetails: {
    flex: 1,
    alignItems: "center",
  },
  tournamentInfo: {
    flexDirection: "row", // Горизонтальное расположение элементов
    alignItems: "center", // Выравнивание по вертикали
    marginVertical: 5,
  },
  gameIcon: {
    width: 30, // Ширина и высота для иконки
    height: 30,
    marginRight: 10,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  matchStage: {
    fontSize: 14,
    color: "#888",
  },
  liveText: {
    color: "red",
    fontWeight: "bold",
    marginVertical: 5,
  },
  scoreText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  matchFormat: {
    fontSize: 14,
    color: "#888",
  },
  tournamentName: {
    width: 30, // Ширина и высота для иконки
    height: 30,
    marginRight: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: 10,
  },
  tab: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#888",
  },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  mapContainer: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    marginVertical: 10,
    borderRadius: 10,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mapTime: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
  },
  mapScore: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  greenScore: {
    color: "green",
  },
  redScore: {
    color: "red",
  },
  players: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamColumn: {
    flex: 1,
  },
  player: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  playerIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  playerName: {
    fontWeight: "bold",
  },
  playerStats: {
    color: "#888",
  },
  playerGold: {
    color: "#f4c430",
  },
  bans: {
    marginTop: 20,
  },
  bansTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  banIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  banIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  mapSummary: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  mapScoreSummary: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamLogoSmall: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  mapScoreText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
