import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Background from "./Screen/Background";
import Todo from "./Screen/todo";
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Background />
        <Todo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
  scroll: {
    backgroundColor: '#efefef'
  }
});
