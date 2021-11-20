import React, {useState} from "react";
import styled from "styled-components";
import Poster6 from "./imgsource/ko.jpg"
import '../content/content.css'

const Poster = styled.img`
    height: 300px;
    padding-top: 10px;
`

const MovieTitle = styled.h4`
    font-weight: 700;
    font-size: 20px;
    padding-top: 7px;
    padding-bottom: 3px;
`

const MovieGenre = styled.h5`
    font-weight: 400;
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 5px;
`

const MovieYear = styled.h6`
    font-weight: 400;
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 50px;
`

const Modal = styled.div`
    background-color: white;
    width : 1000px;
    height : 480px;
    display: flex;
    border-radius: 10px;
`

const Modalimg = styled.img`
    padding: 25px;
    height: 90%;
`

const Modalh4 = styled.h4`
    font-size: 50px;
    padding-bottom: 10px;
    padding-top: 40px;
`

const Modalh5 = styled.h5`
    font-size: 30px;
    padding-bottom: 20px;
`

const Modalh6 = styled.h6`
    font-size: 24px;
    padding-bottom: 10px;
`

const Modalp = styled.p`
    padding-right: 25px;
`

const Modalclose = styled.p`
    margin-top: 60px;
    margin-right: 25px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background-color: black;
        color:white;
        border: 1px solid black;
    }
`

const ModalWishlist = styled.button`
    padding : 5px;
    margin-top: 60px;
    margin-right: 25px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background-color: blue;
        color:white;
        border: 1px solid black;
`

const Movie6 = () => {

    const [style, setStyle] = useState("Modalbg");
    const [Wishlist, setWishList] = useState ([]);
    
    const changeStyle = () => {
        if (style === "Modalbg"){
            setStyle("ModalActive")
        }
        else{
            setStyle("Modalbg")
        }
    }
    
    function AddToWishlist (addedMovie) {
        setWishList((prevWishList) => {
            return prevWishList.concat(addedMovie);
        })
    }
    
    return (
                <div className="Mitems" onClick={changeStyle}>
                    <Poster src={Poster6}/>
                    <MovieTitle>Knives Out</MovieTitle>
                    <MovieGenre>Drama, Crime, Mystery</MovieGenre>
                    <MovieYear>2019</MovieYear>
                    <div className={style}>
                        <Modal>
                            <Modalimg src={Poster6}/>
                            <div>
                                <Modalh4>Knives Out</Modalh4>
                                <Modalh5>2019</Modalh5>
                                <Modalh6>Drama, Crime, Mystery</Modalh6>
                                <Modalp>The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there's one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. Now, Blanc must sift through a web of lies and red herrings to uncover the truth.</Modalp>
                                <ModalWishlist onClick={AddToWishlist}>Add To Wishlist</ModalWishlist>
                                <Modalclose onClick={changeStyle}>Close</Modalclose>
                            </div>
                        </Modal>
                    </div>
                </div>
                )
}

export default Movie6