import facebookLogo from '../../Images/facebookLogo.png';
import instagramLogo from '../../Images/instagramLogo.png';
import gmailLogo from '../../Images/gmailLogo.png';

import './footer.css';


const Footer = () => {
    return (
        <div className="footerGrid">
            
            <div>
                <img src={facebookLogo} alt='facebook logo' />
            </div>
            <div>
                <img src={instagramLogo} alt='instagram logo' />
            </div>
            <div>
                <img src={gmailLogo} alt='gmail logo' />
            </div>
            <div>
                <p>©Xtreme Revolution Martial Arts 2023</p>
            </div>
        </div>
    )
}

export default Footer;