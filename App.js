import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo'

export default function App() {

  //испольхуем хук useState, первое значение в 
  //массиве - state, второе - функция, изменяющая state
  const [todos, setTodos] = useState([])

  //функция для формирования нового элемента todo
  const addTodo = title => {
    //возврат тогоже массива, но с новым элементом todo
    setTodos(prev => [
      ...prev,
      {
        //динамическая генерация id для каждого элемента todo
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <ScrollView>
      <Navbar title="ToDo App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <View>
          { todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          )) }
        </View>
      </View>
    </ScrollView>
  );
}

//стиль компонента AddTodo
const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20,

  }
});
