import './style.css';

function HeaderOptions (){

    const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];
   
    return(
        <ul className='options' >
          { textOptions.map( (text) => (
            <li className='option'> <p> {text} </p></li>
          ) ) }
        </ul>
    );

}    
export default HeaderOptions;