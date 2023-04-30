import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { getBooks } from "../../services/service";



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
const Result = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p{
      width: 200px;  
    }

    img{
        width: 100px;
    }


    &:hover{
        border: 1px solid gray;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])
    const [ books, setBooks] = useState([])

    useEffect( () => {
       const booksAPI = getBooks()
       setBooks(booksAPI)
    }, [books])


    return(
        <SearchContainer>
            <Title>Do you know where start?</Title>
            <Subtitle>Find your book at the bookcase</Subtitle>
            <Input 
                placeholder="Find your next book"
                onBlur={ event => {
                    const typedText = event.target.value
                    const searchResult = books.filter( book => book.name.includes(typedText))
                    setSearchedBooks(searchResult);
                }}
            />
            { searchedBooks.map( book => (
                <Result>
                    <img src={book.src} alt="book" />
                    <p>{book.name}</p>                    
                </Result>
            ))}
        </SearchContainer>
    )
}


export default Search;