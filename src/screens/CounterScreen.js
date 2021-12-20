import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CounterBtn } from '../components/CounterBtn'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    const styles = StyleSheet.create({
        screen: {
            display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1
        },
        text: {
            fontSize: 40, color: 'black'
        },
    })

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Counter: {counter}</Text>
            <CounterBtn title={'+1'} action={() => setCounter(counter + 1)} position='right' />
            <CounterBtn title={'-1'} action={() => setCounter(counter - 1)} position={'left'} />
        </View>
    )
}

export default CounterScreen

