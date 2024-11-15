/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#235D3A";

export const Colors = {
  light: {
    text: "#000",
    background: "#FFF",
    tint: "#2f95dc",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2f95dc",
  },
  dark: {
    text: "#FFF",
    background: "#1E1E1E", // Тёмный фон
    tint: "#00FFFF", // Цвет активных иконок
    tabIconDefault: "#999", // Цвет неактивных иконок
    tabIconSelected: "#00FFFF", // Цвет выбранной иконки
  },
};

// constants/Colors.ts

const GameColors = {
  Dota2: {
    Color: "#A61B19", // Оранжевый цвет для Dota 2
  },
  LoL: {
    Color: "#03404B", // Синий цвет для LoL
  },
  CSGO: {
    Color: "#FBAC18", // Зеленый цвет для CSGO
  },
  Valorant: {
    Color: "#FF4655", // Коричневый цвет для Valorant
  },
  // Добавьте другие игры по необходимости
};

export default GameColors;
