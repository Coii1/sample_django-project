import { FaChevronDown } from 'react-icons/fa'
import upvCampus from '../assets/upvcampus.jpg'
import '../styles/Scholarships.css'

function HeroSection() {
    return(
        <section className='heroSection'>
            <img src={ upvCampus } className='upvCampus' alt="UP Visayas Campus"/>

            <div className='heroContent'>
                <div className='availScholarships'>
                    <h1 className='montserrat-header'>AVAILABLE<br/>SCHOLARSHIPS</h1>
                </div>

                <div className="downBtn">
                    <FaChevronDown className="heroChevronDown"/>
                </div>
            </div>
        </section>
    )
}
export default HeroSection