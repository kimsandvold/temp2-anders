import logo from '../rubichvit.png';

const Header = () => {
    return (
        <div className='Header'>
            <a href="https://www.rubic.no/"><img src={logo} className="logo" /> </a>
            <h2 className='topTekst'> Vinlotteri for Rubic AS </h2>
        </div>
    )
}

export default Header;