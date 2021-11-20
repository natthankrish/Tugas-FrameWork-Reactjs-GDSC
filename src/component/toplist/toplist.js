import React from "react";
import styled from "styled-components";
import TMovie from "./topmovie";
import TSeries from "./topseries";

const TopTitle = styled.h2`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 36px;
`

const Items = styled.div`
    width: 80%;
    margin:auto;
    text-align: center;
`

const Mrow = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
`

function Toplist () {
    return (
        <Items>
        <TopTitle>Top this Week</TopTitle>
            <Mrow>
                <TMovie/>
                <TSeries/>
            </Mrow>
        </Items>
    )
}


export default Toplist