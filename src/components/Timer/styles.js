import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import styled from 'styled-components/native'


export const Title = styled.Text`
font-size: 18px;
margin: 15px;


`;

export const TimerInput = styled.TextInput`
align-items: center;
justify-content: center;
font-size: 90px;

`;
export const TimerInputTextDivider = styled.Text`
font-size: 90px;
`;

export const TimerInputText = styled.Text`

align-items: center;
justify-content: center;
font-size: 90px;
text-align: center;

`;



export const TimerButton = styled.TouchableOpacity`
flex-grow: 1;
align-items: center;
justify-content: center;
margin: 0px 10px 0px 10px;
height: 40px;
width: 40px;
border: #808080 1px;
color: #000;
border-radius: 20px;

`
export const TimerButtonText = styled.Text`
font-size: 15px;
color: #000;
`;

export const MainContainer = styled.View`

align-items: center;
justify-content: center;
background-color: #F8F8F8;
margin: auto;

`


export const StartButton = styled.TouchableOpacity`
align-items: center;
justify-content: space-around;
width: 170px;
height: 50px;
background-color: #55AC55;
border-radius: 20px;

`

export const BigButtonText = styled.Text`
color: #FFF;
font-size: 18px;
`;


export const PauseButton = styled.TouchableOpacity` 
align-items: center;
justify-content: space-around;
margin-left: 10px;
width: 50px;
height: 50px;
border-radius: 20px;
background-color: #545454;
`

export const StopButton = styled.TouchableOpacity`
align-items: center;
justify-content: space-around;
width: 120px;
height: 50px; 
border-radius: 20px;
background-color: #C70303;
`

