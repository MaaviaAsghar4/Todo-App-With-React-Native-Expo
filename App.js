import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Background from "./Screen/Background";
import Todo from "./Screen/todo";
import Constants from "expo-constants";

export default function App() {
  let [todoItem, setTodoItem] = useState([]);

  const handleTodo = (todoValue) => {
    let newTodo = {
      id: Math.floor(Math.random() * 6823648),
      todo: todoValue,
      edit: false,
    };
    setTodoItem((todoItem) => {
      return [...todoItem, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodoItem(todoItem.filter((todos) => todos.id !== id));
  };

  const editTodoItem = (index) => {
    let newTodo = [...todoItem];
    newTodo[index].edit = true;
    setTodoItem(newTodo)

  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Background handleTodo={handleTodo} />
        <Todo todoItem={todoItem} deleteTodo={deleteTodo} editTodoItem={editTodoItem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
  scroll: {
    backgroundColor: "#efefef",
  },
});
