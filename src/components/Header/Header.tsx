import react from 'react'
import logo from '../../assets/images/logomodalgr.png';
import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt='logo' className='header-logo' />
        </header>
    )
}

export default Header