import React from "react";
import { View, Text, StatusBar, StyleSheet, Switch } from "react-native";
import { ThemeColorsProps } from "../pages/Home";

interface HeaderProps extends ThemeColorsProps {
  isEnabled: boolean;
  changeTheme: () => void;
}

export function Header({ themeColors, isEnabled, changeTheme }: HeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: themeColors.header }]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#565BFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={changeTheme}
        value={isEnabled}
        style={styles.toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  toggleTheme: {
    position: "absolute",
    right: 40,
    top: 55,
  },
});
