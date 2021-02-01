import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {       //стиль navigation bar
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab'

    },
    text: {         //стиль текста
        color: 'white',
        fontSize: 20
    }
})