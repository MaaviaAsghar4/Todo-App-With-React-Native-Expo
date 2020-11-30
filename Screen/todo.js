import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.todos}>Todos</Text>
      <View style={styles.columnArranging}>
        <View style={styles.flex}>
          <Text style={styles.todo}>Perform Obligations</Text>
          <View style={styles.btnFlex}>
            <TouchableOpacity style={styles.updateBtn}>
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delBtn}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.todo}>Perform Obligations</Text>
          <View style={styles.btnFlex}>
            <TouchableOpacity style={styles.updateBtn}>
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delBtn}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.todo}>Perform Obligations</Text>
          <View style={styles.btnFlex}>
            <TouchableOpacity style={styles.updateBtn}>
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delBtn}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  todos: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5c3195",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btnFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  updateBtn: {
    backgroundColor: "#6985f6",
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  delBtn: {
    backgroundColor: "#e46472",
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  btnText: {
    color: "#f7f7f7",
  },
  todo: {
    fontSize: 15,
    borderBottomWidth: 2,
    width: "65%",
    paddingBottom: 3,
  },
  columnArranging: {
    flexDirection: 'column'
  }
});
