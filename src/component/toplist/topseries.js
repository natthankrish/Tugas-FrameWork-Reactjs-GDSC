import React, {useState} from "react";
import styled from "styled-components";
import PosterS from "../content/imgsource/himym.jpg";
import "../toplist/toplist.css"

const Poster = styled.img`
    height: 650px
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

const Title2 = styled.h3`
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 50px;
`

const TSeries = () => {

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
                <div className="Items-col" onClick={changeStyle}>
                    <Title2>Top Series</Title2>
                    <Poster src={PosterS}/>
                    <MovieTitle>How I Met Your Mother</MovieTitle>
                    <MovieGenre>Sitcom, Romantic Comedy, Comedy Drama</MovieGenre>
                    <MovieYear>2005-2014</MovieYear>
                    <div className={style}>
                        <Modal>
                            <Modalimg src={PosterS}/>
                            <div>
                                <Modalh4>How I Met Your Mother</Modalh4>
                                <Modalh5>2005-2014</Modalh5>
                                <Modalh6>Sitcom, Romantic Comedy, Comedy Drama</Modalh6>
                                <Modalp>Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney.</Modalp>
                                <ModalWishlist onClick={AddToWishlist}>Add To Wishlist</ModalWishlist>
                                <Modalclose onClick={changeStyle}>Close</Modalclose>
                            </div>
                        </Modal>
                    </div>
                </div>
                )
}

export default TSeries