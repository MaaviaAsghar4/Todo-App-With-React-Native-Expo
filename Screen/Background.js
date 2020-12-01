import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Background = ({handleTodo}) => {

  let [todo,setTodo] = useState('')
  const getText = (text) => {
    setTodo(text)
  }
  const setTodoItem = () => {
    handleTodo(todo)
    setTodo('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Todo App</Text>
      <Text style={styles.header}>Create a New Task</Text>
      <Text style={styles.title}>Add Your Todo</Text>
      <View style={styles.flex}>
        <TextInput
          autoFocus={true}
          clearTextOnFocus={true}
          placeholder="Enter Your Todo"
          style={styles.input}
          onChangeText={text=>getText(text)}
          value={todo}
        />
        <TouchableOpacity style={styles.btn} onPress={setTodoItem}>
          <Text style={styles.btnText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9be7c",
    height: 300,
    width: "100%",
    borderRadius: 35,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  header: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: 'blue'
  },
  input: {
    borderBottomColor: "#007b83",
    borderWidth: 2,
    borderRightColor: "#f9be7c",
    borderLeftColor: "#f9be7c",
    borderTopColor: "#f9be7c",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    fontWeight: "bold",
    width: '70%'
  },
  title: {
    marginHorizontal: 25,
    fontSize: 10,
    marginTop: 40,
  },
  flex: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
  },
  btn: {
      backgroundColor: '#007b83',
      padding: 5,
      borderRadius: 3,
      marginHorizontal: 20
  },
  btnText: {
      color: '#f7f7f7'
  },
  name: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#007b83',
  }
});
