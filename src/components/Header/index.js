import React from 'react'
import { StatusBar } from 'react-native'
import { HeaderContainer, HeaderText } from './styles'


export default function Header() {
    return (
        <>
            <StatusBar
                barStyle="light-content" backgroundColor='#04152A' />
            <HeaderContainer>
                <HeaderText>  a   </HeaderText>
            </HeaderContainer>
        </>
    )

}