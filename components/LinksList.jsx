import '../styles/navbar.css'

const LinksList = () => {
    return (
        <main id='bar-menu'>
            <i className="fa-solid fa-house" id='home-button'></i>
            <ul className="bar-menu-container">
                <li><a href="about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </main>
    );
};

export default LinksList;