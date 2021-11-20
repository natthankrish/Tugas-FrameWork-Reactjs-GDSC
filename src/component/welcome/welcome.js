import React from 'react';
import styled from 'styled-components'
import Welcomebg from '../content/imgsource/illustration.png'

const Intro = styled.div`
    background-image: linear-gradient(rgba(4,9,30,0.3), rgba(4,9,30,0.3)), url(${Welcomebg});
    background-position: center;
    background-size: cover;
    min-height: 75vh;
    width: 100%;
`

const WelcomeText = styled.div`
    width:90%;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const Welcomeh1 = styled.h1`
    font-size: 100px;
`

const Welcomep = styled.p`
    font-size: 28px;
    padding-bottom: 25px;
`

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    color: black;
    border: 1px solid #F9CF93;
    padding: 12px 34px;
    background: wheat;
    position: relative;

    :hover {
        border: 1px solid black;
        background: black;
        transition: 1s;
        color: #F9CF93;}
    `

const ButtonHover = styled.div`
    ${Button}:hover & {
    border: 1px solid black;
    background: black;
    transition: 1s;
    color: #F9CF93;}
  `




function Welcome (){
    return(
        <>
        <Intro>
            <WelcomeText>
                <Welcomeh1>Welcome to Database M</Welcomeh1>
                <Welcomep>Database M is a website storing all movies data. So, we can be your reference to find new exciting movies to chill with!</Welcomep>
                <ButtonHover><Button>Start Your Journey here</Button></ButtonHover>
            </WelcomeText>
        </Intro>
        </>
    )
}

export default Welcome