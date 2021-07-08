import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

import { light, dark } from "../styles/colors";

export interface ThemeColorsProps {
  themeColors: {
    background: string;
    header: string;
    backgroundInput: string;
    text: string;
    textTask: string;
    textTaskDone: string;
    submitButton: string;
    marker: string;
    markerDone: string;
    taskDoneBackground: string;
  };
}

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [themeColors, setThemeColors] = useState(light);

  function changeTheme() {
    setIsDark((oldState) => !oldState);
  }

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  useEffect(() => {
    if (isDark) {
      setThemeColors(dark);
    } else {
      setThemeColors(light);
    }
  }, [isDark]);

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.background }}>
      <Header
        themeColors={themeColors}
        isEnabled={isDark}
        changeTheme={changeTheme}
      />

      <TodoInput addTask={handleAddTask} themeColors={themeColors} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        themeColors={themeColors}
      />
    </View>
  );
}
