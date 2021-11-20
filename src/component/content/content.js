import React from "react";
import styled from "styled-components";
import Movie1 from "./movie1";
import Movie2 from "./movie2";
import Movie3 from "./movie3";
import Movie4 from "./movie4";
import Movie5 from "./movie5";
import Movie6 from "./movie6";
import Movie7 from "./movie7";
import Movie8 from "./movie8";
import Movie9 from "./movie9";
import Movie10 from "./movie10";

const Movies = styled.div`
    width: 80%;
    margin:auto;
    text-align: center;
    background-color: #DBD0C0;
`

const MoviesHead = styled.h2`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 36px;
`

const Mrow = styled.div`
    margin-top: 5%;
    display: flex;
    margin-left:10px;
`

function Content () {
    return (
        <>
        <Movies>
            <MoviesHead>Movies</MoviesHead>
            <Mrow >
                <Movie1/>
                <Movie2/>
                <Movie3/>
                <Movie4/>
                <Movie5/>
            </Mrow>
            <Mrow>
                <Movie6/>
                <Movie7/>
                <Movie8/>
                <Movie9/>
                <Movie10/>
            </Mrow>
        </Movies>
        </>
    )
}


export default Content
