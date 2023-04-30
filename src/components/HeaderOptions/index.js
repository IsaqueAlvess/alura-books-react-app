import styled from 'styled-components';

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

  const textOptions = ['Categories', 'Favorites', 'My Bookcase'];
  
  return(
      <Options>
        { textOptions.map( (text) => (
          <Option><p> {text} </p></Option>
        ) ) }
      </Options>
  );

}    
export default HeaderOptions;