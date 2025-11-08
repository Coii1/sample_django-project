//postDetails.jsx
import '../styles/postDetails.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


function PostDetails() {
    return(

        <>
            <Header />

            <div>
                <h2>Post new scholarship</h2>
                <label htmlFor="title">Scholarship title*</label>
                <input type="text"  id="title"/>

                <label htmlFor="numSlots">Number of Slots*</label>
                <input type="number" id="numSlots"/>
                
                <label htmlFor="qualifications">Qualifications*</label>
                <input type="text" id = "qualifications"/>

                <label htmlFor="benefits">Benefits*</label>
                <input type="text" id = "benefits"/>

                <label htmlFor="instructions">Instructions*</label>
                <input type="text" id = "instructions"/>

                <label htmlFor="requirements">Scholarship Requirements*</label>
                <input type="text" id = "requirements"/>

            </div>
 
            <div className = "requirement-section">

                <button className='addRequirementBtn'>Add</button>
            </div>           

            <Footer />
        </>
    )
}

export default PostDetails