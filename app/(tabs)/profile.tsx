import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GameColors from "@/constants/Colors"; // Импортируем GameColors
import { Shadow } from "react-native-shadow-2";

const favoriteTeams = [
  {
    id: "1",
    name: "OG",
    game: "Dota2",
    logo: "https://s1106sas.storage.yandex.net/rdisk/56814e6b0e836bbcfa23955bedfbaf2bd1f55e0fa83ef5e4fdc12c38d4540c67/6737a549/uuuow_vVwp2fJenCeVcOyhdwLUjbHLVWcMfn4X85Kemlvnf2AjleT8HKy_GFKXh9cE1oG26XD9le9eTFr-TQQg==?uid=614901692&filename=bf41a40136e0dd9ffb11f461cd66d32a.webp&disposition=inline&hash=&limit=0&content_type=image%2Fwebp&owner_uid=614901692&fsize=5852&hid=ec7b0169155e42ed5a23e0a78716a572&media_type=image&tknv=v2&etag=826e4e45aa592fee949c90251ad2aa91&ts=626f8d5cd2440&s=b33042226853e53176cc6f047d948740b84534e1579491e8895e18b093b5a3fb&pb=U2FsdGVkX1_SDvn8zsmaicoZXoNow4ncMYqfivfHj_cirjzgpYokTUCzjBHfeIYip1RbPoVA1DO8C3nq0dzObv6qqL643EgiXNUnfEBIzuU",
  },
  {
    id: "2",
    name: "Team Spirit",
    game: "LoL",
    logo: "https://s96vlx.storage.yandex.net/rdisk/e8c8cdebc83625a54c84ac8ff75c0217d7998a0c3cbde778e0205cef6e8b6920/6737a563/HS8eIb11AgO5SKG8kxSzelWfndVOOk9lQ0Uli5NsoD4L57K7OICt7am2hb717UNQ87yb17mtTFqSbP70WA9VRQ==?uid=614901692&filename=127px-Team_Spirit_2022_lightmode.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=614901692&fsize=3615&hid=690fe92ae4c9b26859ffd4f0fbf88b09&media_type=image&tknv=v2&etag=0e18db73621d448fa92b884e13f660da&ts=626f8d759dec0&s=d84e8aa90b7652c248006e0ccdde82ac5b5522622e94dd6ea149dfa28e1a87c4&pb=U2FsdGVkX1_E5u0cchmotLZdYKnvd-QKsLXWCi6QRRN1rtAbUQnR0Prngiy0fsO6558II2W8HnCj7WqGVRVxvGY_TWua7WPdJk16VrWr578",
  },
  {
    id: "3",
    name: "Team Falcons",
    game: "CSGO",
    logo: "https://s145vla.storage.yandex.net/rdisk/748d01b183d9c459d4ecfb389025fd7047231d4d03cede781b50d9e42a3e21da/6737a57b/HS8eIb11AgO5SKG8kxSzerWb3M-XEcK2aLJrRz4bS6RxI-a26rEcZcbym79GkjRgDwRM9P2ElDGIGaj7-hIB3g==?uid=614901692&filename=122px-Team_Falcons_2022_allmode.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=614901692&fsize=8460&hid=f5e0b2877341424060a2763a7f626094&media_type=image&tknv=v2&etag=341e73d7e29848988751357aa6913764&ts=626f8d8c814c0&s=ed1f4dbe196987ab77718a1c4c298ff8239816f837897fd8bed90d139d6db7da&pb=U2FsdGVkX19gFiltOKaE2t_TJ2kIzWUK9vaYamkvruOUGrDIsZknr4q8RPXva-lnHLBADRlXBW0iCQ77855M_te5y_7R9M3sc0xKIJikpMs",
  },
  {
    id: "4",
    name: "OG",
    game: "Valorant",
    logo: "https://s1106sas.storage.yandex.net/rdisk/56814e6b0e836bbcfa23955bedfbaf2bd1f55e0fa83ef5e4fdc12c38d4540c67/6737a549/uuuow_vVwp2fJenCeVcOyhdwLUjbHLVWcMfn4X85Kemlvnf2AjleT8HKy_GFKXh9cE1oG26XD9le9eTFr-TQQg==?uid=614901692&filename=bf41a40136e0dd9ffb11f461cd66d32a.webp&disposition=inline&hash=&limit=0&content_type=image%2Fwebp&owner_uid=614901692&fsize=5852&hid=ec7b0169155e42ed5a23e0a78716a572&media_type=image&tknv=v2&etag=826e4e45aa592fee949c90251ad2aa91&ts=626f8d5cd2440&s=b33042226853e53176cc6f047d948740b84534e1579491e8895e18b093b5a3fb&pb=U2FsdGVkX1_SDvn8zsmaicoZXoNow4ncMYqfivfHj_cirjzgpYokTUCzjBHfeIYip1RbPoVA1DO8C3nq0dzObv6qqL643EgiXNUnfEBIzuU",
  },
];

const ProfileScreen: React.FC = () => {
  const renderFavoriteTeam = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    // Получаем цвет для игры из GameColors
    const gameKey = item.game as keyof typeof GameColors;
    const teamColor = GameColors[gameKey]?.Color || "#000";
    const sideBarColor = GameColors[gameKey]?.Color || "#000";

    return (
      <Shadow
        distance={6}
        offset={[2, 2]}
        startColor={`${sideBarColor}33`} // Полупрозрачный цвет тени
        style={index % 2 === 0 ? { marginRight: 12 } : {}}
      >
        <View
          style={[
            styles.teamCard,
            { borderColor: teamColor, backgroundColor: "#fff" },
          ]}
        >
          <Image source={{ uri: item.logo }} style={styles.teamLogo} />
          <Text style={[styles.teamName, { color: teamColor }]}>
            {item.name}
          </Text>
        </View>
      </Shadow>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <Icon name="settings-outline" size={24} color="#235d3a" />
        </TouchableOpacity>
      </View>
      <View style={styles.fullWidthLine} />

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://s261vlx.storage.yandex.net/rdisk/cf28985b8134a7bcdc89ceb9d7fcd6313141e635008c62e2d106f96c4b8e29f6/6737a5dd/uuuow_vVwp2fJenCeVcOyo5MDeMyVhxDH2a2UGE9luNVSK3Z6e9GygVosbUVTdkNtdMXQS4UFlWjKkkY1eKPkw==?uid=614901692&filename=Boy%2013.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=614901692&fsize=4091758&hid=031ffb09bb896504eab8745cd02ec52a&media_type=image&tknv=v2&etag=ff6ef76575ca96b59057e4361823f9f7&ts=626f8de9f7140&s=502e627684f52540cf4311e398753e62aae34f1080470687b1200d221bed4953&pb=U2FsdGVkX19rU4ep8dcDh19UlM-M32CC7BTh9b4cM26uE7AHsorL8JMqqmIjNa0UGL8YPwpM-FxL7bpGmdXNtwi8x-bBLg3PfpPh8n_xD2w",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Alexa Chen</Text>
        <Text style={styles.profileUsername}>@AlexChen1234</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.fullWidthButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.fullWidthButton, styles.messageButton]}
          >
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.favoriteTeamsTitle}>Favorite Teams</Text>
      <FlatList
        data={favoriteTeams}
        renderItem={renderFavoriteTeam}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.teamsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 35,
    position: "relative",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#235d3a",
  },
  settingsIcon: {
    position: "absolute",
    right: 0,
  },
  fullWidthLine: {
    borderTopWidth: 0.75,
    borderTopColor: "#eee",
    marginHorizontal: -20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginVertical: 18,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#235d3a",
  },
  profileUsername: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  fullWidthButton: {
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 10,
    width: "50%",
    height: 40,
    alignItems: "center",
  },
  followButtonText: {
    fontSize: 16,
    color: "#235d3a",
    fontWeight: "bold",
  },
  messageButton: {
    backgroundColor: "#235d3a",
  },
  messageButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  favoriteTeamsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#235d3a",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  teamsContainer: {
    justifyContent: "space-between",
  },
  teamCard: {
    width: 165,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    height: 74,
  },
  teamLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});

export default ProfileScreen;
