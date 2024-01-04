import '../App.css';
import Picture from './images/profile-img.jpg';


function Bio() {
    return (
        <div>
            <img class="profile-pic" src={Picture} alt="man in front of a pine tree" />
            <ul>
                <h2 className="bio-title">Jared Aragon</h2>
                <li className="bio-text">Email: aragonmjay@gmail.com</li>
                <li className="bio-text">Cell Phone: 201-463-9066</li>
                <li className="bio-text" >Provo ,UT</li>
            </ul>
            <p className="bio-text">Web Developer</p>
            <a href="https://github.com/j-aragon" id="evil-twin" className="paddington">GitHub Account</a>
        </div>
    );
}

export default Bio;