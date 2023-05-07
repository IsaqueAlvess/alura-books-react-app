import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorite, getFavorites } from '../../services/favoritesService';
import bookImg from '../../imgs/livro.png'

const FavoritesContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`
const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites(){
    const favoritesAPI = await getFavorites()
    setFavorites(favoritesAPI)
  }

  async function deleteFavoriteBook(id){
    await deleteFavorite(id)
    await fetchFavorites()
    alert(`The book with ID ${id} was deleted successfully!`)
  }

  
  useEffect( () => {
    fetchFavorites()
  }, [])
  
  return (
    <FavoritesContainer>
      <div>
        <Title>Your favorite books</Title>
        <ResultContainer>
          {
            favorites.length !== 0 ? favorites.map(favorite =>(
              
              <Result onClick={ () => deleteFavoriteBook(favorite.id)}>
                
                <img src={bookImg} alt="book"/>
                <p>{favorite.name}</p>
                
              </Result>

            ) ) : null
          }

        </ResultContainer>
      </div>
    </FavoritesContainer>
  );
}

export default Favorites;
