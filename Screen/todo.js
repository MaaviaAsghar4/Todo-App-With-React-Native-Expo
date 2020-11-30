import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";

const Todo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <TextInput
          placeholder="Enter Todo"
          autoFocus={true}
          clearTextOnFocus={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btn}>
          <Text>Add todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#ffe4d4",
    height: "50%",
    margin: 15,
    borderRadius: 4,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    borderColor: "#425195",
    borderWidth: 3,
    width: "70%",
    height: "20%",
    borderRadius: 3,
    padding: 7,
  },
  btn: {
    backgroundColor: "#425195",
    padding: 12,
    borderRadius: 3,
  },
});
