import React from 'react'
import { Title, View, Text } from '../../components/Timer/styles'
import Header from '../../components/Header'
import Timer from '../../components/Timer'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'


export default function Home() {
    return (
        <>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <Header>Cronometro simples</Header>
                <Timer />

            {/* </TouchableWithoutFeedback> */}
        </>
    )
};
