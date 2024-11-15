// MatchCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GameColors from "@/constants/Colors";
import GameIcons from "@/constants/Icons";

export interface MatchProps {
  id: string;
  team1: string;
  team2: string;
  score: string;
  tournament: string;
  logo1: any;
  logo2: any;
  game: string;
  date: any;
}

const MatchCard: React.FC<MatchProps> = ({
  team1,
  team2,
  score,
  tournament,
  logo1,
  logo2,
  game,
}) => {
  const gameKey = game as keyof typeof GameColors;
  const teamColor = GameColors[gameKey]?.Color || "#000";
  const sideBarColor = GameColors[gameKey]?.Color || "#000";
  const gameIcon = GameIcons[gameKey];

  return (
    <View style={styles.matchContainer}>
      <View style={styles.teamsContainer}>
        <Image source={logo1} style={styles.logo1} />
        <View style={{ flex: 1 }}>
          <Text style={[styles.teamName, { color: teamColor }]}>
            {team1} vs {team2}
          </Text>
          <Text style={styles.score}>{score}</Text>
          <View style={styles.tournamentContainer}>
            <Image source={gameIcon} style={styles.gameIcon} />
            <Text
              style={styles.tournament}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {tournament}
            </Text>
          </View>
        </View>
        <Image source={logo2} style={styles.logo2} />
      </View>
      <View style={[styles.sideBar, { backgroundColor: sideBarColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  matchContainer: {
    borderBottomWidth: 1.3,
    borderBottomColor: "#eee",
    paddingVertical: 10,
    position: "relative",
    maxHeight: 100,
  },
  teamsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamName: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tournamentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  score: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 10,
  },
  tournament: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  logo1: {
    width: 70,
    height: 80,
    marginRight: 10,
  },
  logo2: {
    width: 70,
    height: 80,
    marginLeft: 0,
  },
  gameIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  sideBar: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    width: 4,
    height: "80%",
    position: "absolute",
    top: "20%",
  },
});

export default MatchCard;
