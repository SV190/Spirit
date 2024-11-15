import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Определяет текущую тему (светлую или тёмную)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint, // Используем цвет активных элементов в зависимости от темы
        tabBarInactiveTintColor: Colors[colorScheme ?? "dark"].tabIconDefault, // Цвет неактивных иконок
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "dark"].background, // Тёмный фон для табов
        },
        headerShown: false, // Скрытие заголовка
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
