import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { ThemeColorsProps } from "../pages/Home";

interface FlatListHeaderProps {
  textColor: string;
}

function FlatListHeaderComponent({ textColor }: FlatListHeaderProps) {
  return (
    <View>
      <Text style={[styles.header, { color: textColor }]}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps extends ThemeColorsProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  themeColors,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={
              item.done
                ? [
                    styles.taskButtonDone,
                    { backgroundColor: themeColors.taskDoneBackground },
                  ]
                : styles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? [
                      styles.taskMarkerDone,
                      { backgroundColor: themeColors.markerDone },
                    ]
                  : [styles.taskMarker, { borderColor: themeColors.marker }]
              }
            />
            <Text
              style={
                item.done
                  ? [styles.taskTextDone, { color: themeColors.textTaskDone }]
                  : { color: themeColors.textTask }
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent textColor={themeColors.text} />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
  },
});
