import React, { useState } from 'react'
import {
    TimerInput, MainContainer, TimerButton, TimerButtonText, TimerInputText, StopButton,
    StartButton, BigButtonText, PauseButton, TimerInputTextDivider
} from '../../components/Timer/styles'
import { HorizontalContainer, VerticalContainer, TimerButtonContainer, TimerInputContainer, BottomButtonContainer } from '../Containers/styles';
import { StyleSheet, Text } from 'react-native';
import { Icon } from ''

var tm



export default function Timer() {

    const [activeTimer, setActivityTimer] = useState(false);
    const [isPaused, setPause] = useState(false);
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    var mm = parseInt(minutes);
    var ss = parseInt(seconds);




    const styles = StyleSheet.create({
        shadow: {
            shadowOffset: { width: 25, height: 25 },
            shadowColor: '#111',
            shadowOpacity: 0.8,
            elevation: 4,

        },
        disabledColor: {
            display: 'none',

        },
        fontTest: {
            fontFamily: 'sans-serif-light'
        }
    })

    function setTime(m, s) {
        setMinutes(m)
        setSeconds(s)
    }
    function verifyValueMinutes(e) {
        if (typeof parseInt(e) === 'number' && parseInt(e) < 60 || e == '') {
            setMinutes(e)
        } else {
            setMinutes(60)
            alert('Valor inválido')
        }


    }
    function verifyValueSeconds(e) {
        if (typeof parseInt(e) === 'number' && parseInt(e) < 61 || e == '') {
            setSeconds(e)
        } else {
            setSeconds(60)
            alert('Valor inválido')
        }
        if (parseInt(e) == '60') {
            setMinutes('01')
            setSeconds('00')
        }
    }


    function time() {
        tm = setInterval(countDown, 1000);

    }

    function stop() {
        setTime('00', '00');
        clearInterval(tm);
        setActivityTimer(false)
        setPause(false)

    }



    function countDown() {
        ss--
        if (parseInt(ss) > -1) {
            if (parseInt(ss) < 10) {
                setSeconds('0' + ss)

            } else {
                setSeconds(ss)
            }
        }
        if (parseInt(ss) == -1 && parseInt(mm) > 0) {
            ss = 60;
            setSeconds(60);
            mm--
            setMinutes((parseInt(mm) < 10) ? '0' + mm : mm)


        }
        if (parseInt(ss) == 0 && parseInt(mm) == 0) {
            stop()

        }
    }




    function start() {
        setActivityTimer(true)


        mm = parseInt(minutes);
        if (!minutes) {
            setMinutes('00')
            mm = '00'
        }
        if (parseInt(minutes) < 10 && minutes.length < 2) {
            mm = '0' + parseInt(minutes)
            setMinutes('0' + minutes)
        }



        ss = parseInt(seconds);
        if (!seconds) {
            setSeconds('00')
            ss = '00'
        }
        if (parseInt(seconds) < 10 && seconds.length < 2) {
            mm = '0' + parseInt(seconds)
            setSeconds('0' + seconds)
        }


        time()

    }

    function pause() {
        console.warn('pause')
        setPause(!isPaused)

        { !isPaused ? (clearInterval(tm)) : (time()) }
    }



    return (
        <VerticalContainer style={styles.shadow} >
            <HorizontalContainer>
                <TimerInputContainer>
                    {!activeTimer ? (
                        <>
                            <TimerInput
                                onChangeText={(e) => verifyValueMinutes(e)}
                                textAlign="center"
                                keyboardType="number-pad"
                                maxLength={2}
                                defaultValue={`${minutes}`}

                            />


                            <TimerInputTextDivider>:</TimerInputTextDivider>

                            <TimerInput
                                onChangeText={(e) => verifyValueSeconds(e)}
                                textAlign="center"
                                keyboardType="number-pad"
                                maxLength={2}
                                defaultValue={`${seconds}`}


                            />
                        </>
                    ) : (
                        <>
                            <TimerInputText>{minutes}</TimerInputText>

                            <TimerInputTextDivider>:</TimerInputTextDivider>

                            <TimerInputText>{seconds}</TimerInputText>
                        </>

                    )}

                </TimerInputContainer>
            </HorizontalContainer>
            <HorizontalContainer>
                {
                    !activeTimer ? (
                        <TimerButtonContainer>
                            <StartButton
                                onPress={() => start()
                                }
                                activeOpacity={.7}
                                style={styles.shadow}
                            >
                                <BigButtonText >Começar</BigButtonText>
                            </StartButton>
                        </TimerButtonContainer>

                    ) : (
                        <TimerButtonContainer>
                            <StopButton
                                onPress={() => stop()}
                                style={styles.shadow}
                            ><BigButtonText>Zerar</BigButtonText></StopButton>
                            <PauseButton
                                onPress={() => pause()}
                                style={styles.shadow}
                            ><BigButtonText>{isPaused ? ('>') : ('||')}</BigButtonText></PauseButton>
                        </TimerButtonContainer>
                    )
                }
            </HorizontalContainer>


            <BottomButtonContainer>
                <TimerButton
                    onPress={() => setTime('02', '03')}
                    activeOpacity={.7}
                    style={styles.shadow, (activeTimer ? styles.disabledColor : '')}
                    disabled={activeTimer}
                ><TimerButtonText>02:03</TimerButtonText></TimerButton>

                <TimerButton
                    onPress={() => setTime('01', '14')}
                    activeOpacity={.7}
                    style={styles.shadow, (activeTimer ? styles.disabledColor : '')}
                    disabled={(activeTimer)}
                ><TimerButtonText>01:14</TimerButtonText></TimerButton>

                <TimerButton
                    onPress={() => setTime('00', '10')}
                    activeOpacity={.7}
                    style={styles.shadow, (activeTimer ? styles.disabledColor : '')}
                    disabled={activeTimer}
                ><TimerButtonText>00:10</TimerButtonText></TimerButton>
            </BottomButtonContainer>
            
        </VerticalContainer>
    )



}



