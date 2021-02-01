import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'


export const AddTodo = ({ onSubmit }) => {

    const[value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } 
        else {
            Alert.alert('Cannot be empty')
        }
    }

    return(
        //AddTodo включает в себя  ввод текста и кнопку для сохранения
        <View style={styles.block}>
            <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Enter Todo"
            autoCorrect={false}
            />
            <Button title="Add ToDo" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
    }
})