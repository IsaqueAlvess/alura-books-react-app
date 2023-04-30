import Input from "../Input";
import styled from "styled-components";
import { useState } from 'react';
import { livros } from '../Search/dataSearch';



const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;    
    font-weight: 500;
    margin-bottom: 40px;
`


function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    console.log(searchedBooks)

    return(
        <SearchContainer>
            <Title>Do you know where start?</Title>
            <Subtitle>Find your book at the bookcase</Subtitle>
            <Input 
                placeholder="Find your next book"
                onBlur={ event => {
                    const typedText = event.target.value
                    const searchResult = livros.filter( livro => livro.name.includes(typedText))
                    setSearchedBooks(searchResult);
                }}
            />
            
        </SearchContainer>
    )
}


export default Search;