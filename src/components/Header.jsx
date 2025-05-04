import './Header.css';
const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <img src = "/TravelJournal/images/globe.png" alt="Globe Icon"/>
                <span>my travel journal</span>
            </div>
        </header>
    );
}

export default Header;