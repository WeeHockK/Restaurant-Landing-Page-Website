import {images} from "../../Constants";
import {SubHeading} from '../../Components';
import './Header.css'

function Header(){
    return (
        <div className="app__header app__wrapper section_padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavour"/>
                <h1 className="app__header-h1"> The key to fine dining</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <a href="/BistroGarden.pdf" target="_blank" className="custom__button">Explore Menu</a>
            </div>

            <div className="app__wrapper_img">
                <img src={images.welcome} alt="welcome"/>
            </div>
        </div>
    )
}

export default Header;