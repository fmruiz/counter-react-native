import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const CounterBtn = ({ title, action, position }) => {

    const styles = StyleSheet.create({
        counterBtnLocation: {
            position: "absolute",
            bottom: 20,
        },
        right: {
            right: 20,
        },
        left: {
            left: 20
        },
        counterBtn: {
            backgroundColor: 'lightgreen',
            borderRadius: 100,
            height: 40,
            width: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        counterBtnCenter: {
            backgroundColor: 'lightgreen',
            borderRadius: 10,
            height: 40,
            width: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        counterTxt: {
            fontWeight: 'bold'
        }
    })

    return (
        <TouchableOpacity
            onPress={action}
            style={[styles.counterBtnLocation, position === 'right' ? styles.right : styles.left]}
            activeOpacity={0.5}
        >
            <View style={styles.counterBtn}>
                <Text style={styles.counterTxt}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
