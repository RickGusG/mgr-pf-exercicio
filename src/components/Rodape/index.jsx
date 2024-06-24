import './Rodape.css'
import logo from '../../assets/images/logomodalgr.png'

const Rodape = () =>{
    return (
        <footer className='footer'>
            <img src={logo} alt='Logo da ModalGR' className='imgFooter'></img>
            <p className='pFooter'>© 2024 ModalGR. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Rodape