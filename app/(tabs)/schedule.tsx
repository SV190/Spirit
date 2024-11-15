import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  Image,
} from "react-native";
import { format, addDays, startOfWeek, endOfWeek, isSameDay } from "date-fns";
import MatchCard from "@/components/MatchCard";
import MatchDetails from "@/app/MatchDetails";
import { Svg, Path } from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SCREEN_WIDTH / 7;

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 7 }).map((_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  const handlePrevWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, -7));
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 7));
  };

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, -1));
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
  };

  const matches = [
    {
      id: "1",
      team1: "Spirit",
      team2: "OG",
      score: "1 - 0",
      tournament: "BetBoom Dacha Belgrade and Slovekia 2024",
      logo1: require("@/assets/images/teams/ts.png"),
      logo2: require("@/assets/images/teams/og.png"),
      game: "Dota2",
      date: new Date(),
    },
    {
      id: "2",
      team1: "Falcons",
      team2: "Spirit",
      score: "1 - 0",
      tournament: "BetBoom Dacha Belgrade and Slovekia 2024",
      logo1: require("@/assets/images/teams/tf.png"),
      logo2: require("@/assets/images/teams/ts.png"),
      game: "LoL",
      date: new Date(),
    },
    {
      id: "3",
      team1: "NaVi",
      team2: "VP",
      score: "1 - 0",
      tournament: "BetBoom Dacha Belgrade and Slovekia 2024",
      logo1: require("@/assets/images/teams/NaVi.webp"),
      logo2: require("@/assets/images/teams/VP.webp"),
      game: "CSGO",
      date: new Date(),
    },
    {
      id: "4",
      team1: "Avulus",
      team2: "Tundra",
      score: "18:30",
      tournament: "BetBoom Dacha Belgrade and Slovekia 2024",
      logo1: require("@/assets/images/teams/Avulus.webp"),
      logo2: require("@/assets/images/teams/Tundra.webp"),
      game: "Valorant",
      date: new Date(),
    },
    {
      id: "5",
      team1: "NaVi",
      team2: "VP",
      score: "15:30",
      tournament: "ESL One Bangkok 2024",
      logo1: require("@/assets/images/teams/NaVi.webp"),
      logo2: require("@/assets/images/teams/VP.webp"),
      game: "Dota2", // Пример игры
      date: "2024-11-16",
    },
  ];

  const filteredMatches = matches.filter((match) =>
    isSameDay(match.date, selectedDate)
  );

  const weekPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 20) {
          handlePrevWeek();
        } else if (gestureState.dx < -20) {
          handleNextWeek();
        }
      },
    })
  ).current;

  const dayPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 20) {
          handlePrevDay();
        } else if (gestureState.dx < -20) {
          handleNextDay();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule</Text>

      <View style={styles.calendarContainer} {...weekPanResponder.panHandlers}>
        <TouchableOpacity onPress={handlePrevWeek}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        {daysOfWeek.map((day) => (
          <TouchableOpacity
            key={day.toISOString()}
            style={[
              styles.dayContainer,
              isSameDay(day, selectedDate) && styles.selectedDayContainer,
            ]}
            onPress={() => setSelectedDate(day)}
          >
            <Text
              style={[
                styles.dayOfWeekText,
                isSameDay(day, selectedDate) && styles.selectedDayText,
              ]}
            >
              {format(day, "EEE")}
            </Text>
            <Text
              style={[
                styles.dayText,
                isSameDay(day, selectedDate) && styles.selectedDayText,
              ]}
            >
              {format(day, "d")}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleNextWeek}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerMain} {...dayPanResponder.panHandlers}>
        {filteredMatches.length === 0 ? (
          <View style={styles.emptyContainer}>
            {/* <Image
              source={require("@/assets/images/list2.png")}
              style={styles.placeholderImage}
            /> */}
            <Ionicons
              name="calendar-clear-outline"
              size={55}
              color="black"
              style={styles.placeholderImage}
            />
            <Text style={styles.placeholderText}>Нет событий на этот день</Text>
          </View>
        ) : (
          <FlatList
            data={filteredMatches}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MatchDetails", { matchData: item })
                } // Навигация на экран MatchDetails
              >
                <MatchCard {...item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 35,
    color: "#235d3a",
  },
  calendarContainer: {
    borderBottomWidth: 0.75,
    borderBottomColor: "#eee",
    borderTopWidth: 0.75,
    borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  arrow: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  dayContainer: {
    width: ITEM_WIDTH,
    alignItems: "center",
    paddingVertical: 8,
    borderLeftWidth: 0.75,
    borderLeftColor: "#eee",
  },
  selectedDayContainer: {
    backgroundColor: "#235d3a",
  },
  dayText: {
    fontSize: 16,
    color: "#235d3a",
  },
  selectedDayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dayOfWeekText: {
    fontSize: 12,
    color: "#235d3a",
    fontWeight: "bold",
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#fff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderImage: {
    width: 55,
    height: 55,
    marginBottom: 10,
    color: "#888",
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#888",
  },
});
