import '../App.css';
import Picture from './images/profile-img.jpg';


function Bio() {
    return (
        <div>
            <h2 className="bio-title">Jared Aragon</h2>
            <img class="profile-pic" src={Picture} alt="man in front of a pine tree" />
            <ul>
                <li className="bio-text">Email: jaredaragon7@gmail.com</li>
                <li className="bio-text">Telephone: 201-463-9066</li>
                <li className="bio-text" >Based in Provo ,UT</li>
            </ul>
            <h3 className="bio-text">About Me</h3>
            <p className="bio-text">Full Stack Web Developer.</p>
            <p className="bio-text">These are Projects I have worked on.</p>
            <p className="bio-text">The Languages and technologies I am proficient in are</p>
            <p className="bio-text"> HTML5, CSS3, JavaScript, MongoDB, Express.js, React, Node.js, and Git.</p>
            <p className="bio-text"> Stay tuned for upcoming projects! Please contact me if I can be of assistance to you or your organization. </p>
            <a href="https://github.com/magjoker" id="evil-twin" className="paddington">GitHub Account</a>
        </div>
    );
}

export default Bio;