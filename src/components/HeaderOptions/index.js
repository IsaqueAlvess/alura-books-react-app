import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Options = styled.ul`
  display: flex;
`
const Option = styled.li`
  display: flex;
  min-width: 120px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
`

function HeaderOptions (){

  const textOptions = ['Categories', 'Favorites', 'Bookcase'];
  
  return(
      <Options>
        { textOptions.map( (text) => (
          <Link to={`/${text.toLowerCase()}`}>
            <Option><p> {text} </p></Option>  
          </Link> 
        ) ) }
      </Options>
  );

}    
export default HeaderOptions;