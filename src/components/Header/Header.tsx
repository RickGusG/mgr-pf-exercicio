import react from 'react'
import logo from '../../assets/logoModalGR.png';
import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt='logo' className='header-logo'></img>
        </header>
    )
}

export default Header