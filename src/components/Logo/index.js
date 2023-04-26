import logo from '../../imgs/logo.svg';
import './style.css';

function Logo(){
    return(
        <div className='logo'>
          <img src={logo} 
              alt="logo" 
              className='logo-img'></img>
          <p>
            <strong>Alura Books</strong>
          </p>
        </div>
    );
};

export default Logo;