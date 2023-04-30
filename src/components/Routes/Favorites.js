import styled from 'styled-components';

import Search from '../Search';

const FavoritesContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

function Favorites() {
  return (
    <FavoritesContainer>
      <Search />
    </FavoritesContainer>
  )
}

export default Favorites;
