import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

export const HorizontalContainer = styled.View`

/* flex: 1; */
align-items: center;
justify-content: space-between;
flex-direction: row;
margin: 10px;
/* padding: 20px 10px 20px 10px; */
`

export const VerticalContainer = styled.View`
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 90%;
`

export const TimerButtonContainer = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;

`
export const TimerInputContainer = styled.View`
flex: 1;
align-items: center;
justify-content: center;
flex-direction: row;

`
export const BottomButtonContainer = styled.View`
/* flex: 1; */
margin: 10px;
align-items: center; 
justify-content: space-between; 
flex-direction: row;
`