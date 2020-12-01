import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const todo = ({ todoItem, deleteTodo, editTodoItem }) => {
  const delTodo = (id) => {
    deleteTodo(id)
  }

  const editTodo = (index) => {
    editTodoItem(index)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.todos}>Todos</Text>
      <View style={styles.columnArranging}>
        {todoItem && todoItem.map((todo,i) => {
          return (
            <View style={styles.flex} key={todo.id}>
              <Text style={todo.edit ? styles.complete: styles.todo}>{i+1} - {todo.todo}</Text>
              <View style={styles.btnFlex}>
                <TouchableOpacity onPress={()=>editTodo(i)} style={styles.updateBtn}>
                  <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>delTodo(todo.id)} style={styles.delBtn}>
                  <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
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
    marginTop: 20,
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
  complete: {
    fontSize: 15,
    borderBottomWidth: 2,
    width: "65%",
    paddingBottom: 3,
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
  columnArranging: {
    flexDirection: "column",
  },
});
