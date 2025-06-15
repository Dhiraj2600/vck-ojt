import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <>
        <header>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/admission">Admission</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/NotFound">NotFound</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </header>

        </>
    )
}

export default Header;