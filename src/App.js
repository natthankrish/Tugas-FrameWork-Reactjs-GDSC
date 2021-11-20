import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';

import Content from './component/content/content';
import Welcome from './component/welcome/welcome';
import Toplist from './component/toplist/toplist';

const TopTitle = styled.h2`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 36px;
`

const Main = styled.div`
    min-height: 35px;
    width:100%;
    position: relative;
    background-color: #F9E4C8;
`;

const Logo = styled.h1`
    color: black;
    text-decoration: none;
    font-size: 36px;
`

const Menu = styled.ul`
    flex: 1;
    text-align: right;
`

const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;

    : after {
        content: '';
        width: 0%;
        height: 2px;
        background: black;
        display: block;
        margin: auto;
        transition:0.5s;
    }

    :hover::after {
        width: 100%;
    }
`

const HeadLink = styled.a`
    color: black;
    text-decoration: none;
    font-size: 20px;
`

const Nav = styled.nav`
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;

`


function App() {
  const [IsMovieList, setIsMovieList] = useState(true);

  function alternateList () {
        setIsMovieList((prevMovieList) => !prevMovieList)
  }

  if (IsMovieList) {
  return (
    <>
      <div>
      <Main>
            <Nav>
                <Logo>
                    Database M
                </Logo>
                <Menu>
                    <MenuItem>
                        <HeadLink onClick={alternateList}>Home</HeadLink>
                    </MenuItem>
                    <MenuItem>
                        <HeadLink onClick={alternateList}>Wishlist</HeadLink>
                    </MenuItem>
                </Menu>
            </Nav>
        </Main>
      </div>
      <Welcome />
      <Toplist />
      <Content />
    </>
  );
  }
  else {
  return(
    <>
      <div>
      <Main>
            <Nav>
                <Logo>
                    Database M
                </Logo>
                <Menu>
                    <MenuItem>
                        <HeadLink onClick={alternateList}>Home</HeadLink>
                    </MenuItem>
                    <MenuItem>
                        <HeadLink onClick={alternateList}>Wishlist</HeadLink>
                    </MenuItem>
                </Menu>
            </Nav>
        </Main>
      </div>
      <TopTitle>Your Watching Bucket</TopTitle>
    </>
  )
  }
}

export default App;
