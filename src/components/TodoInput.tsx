import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";
import { ThemeColorsProps } from "../pages/Home";

interface TodoInputProps extends ThemeColorsProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask, themeColors }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    addTask(task);

    setTask("");
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        { backgroundColor: themeColors.backgroundInput },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: themeColors.backgroundInput,
            color: themeColors.textTask,
          },
        ]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={themeColors.textTask}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[
          styles.addButton,
          { backgroundColor: themeColors.submitButton },
        ]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
