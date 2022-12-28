import familyPhoto from '../../Images/familyPhoto.png';
import './testimonials.css';
import {Star} from '../../components/icons';

const Testimonials = () => {
    
    return (
        <div className="testimonialContainer">
            <div className='headerText'>
                <h2>HERE IS WHAT OUR CLIENTS HAVE TO SAY:</h2>
            </div>
            <div className="circleContainer">
                <img className='familyPicTest' src={familyPhoto} alt='family photo' />
            </div>
            <div>
                <h3 className='apostrophe'>"</h3>
            </div>
            <div>
                <p className='nameTest'>Cristina Arbor</p>
            </div>
            <div className='star'>
                <Star /><Star /><Star /><Star /><Star />
            </div>
            <div className='quote'>
                <h3>WE LOVE EVERYTHING THEY STAND FOR</h3>
            </div>
            <div className='testimony'>
                <p>I can't say enough about a place like Xtreme Revolution! They always go above and beyond and genuinely care about each of their students, families, and community. The staff is amazing, and we love everything they stand for and the values they teach. If you want to invest in a positive environment to help your child grow, come to Xtreme Revolution.</p>
            </div>
            <div className='apostrophe2'>
                <h3>"</h3>
            </div>
        </div>
    )
}

export default Testimonials;