//postDetails.jsx
import '../styles/postDetails.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


function PostDetails() {
    return(
        <div className='postDetails'>
            <Header />

            <div className='postScholarshipContent'>

                <div className='postScholarshipForm'>

                    <h2>Post new scholarship</h2>

                    <div class="mb-3">
                        <label className='required form-label' htmlFor="title">Scholarship title</label>
                        <input type="text" class="form-control" id="title" required/>
                    </div>

                    <div className='mb-3'>
                        <label className='required form-label' htmlFor="numSlots">Number Of Slots Available</label><br/>
                        <input type="number" id="numSlots" min={1} max={1000} required/><br/>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="qualifications" className="required form-label">Qualifications</label>
                        <textarea class="form-control" id="qualifications" rows="5"required></textarea>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="benefits" className="required form-label">Benefits</label>
                        <textarea class="form-control" id="benefits" rows="5"required></textarea>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="instructions" className="required form-label">Instructions</label>
                        <textarea class="form-control" id="qualifications" rows="5"required></textarea>
                    </div>

                    <div className='formContainer'>
                        <label className='required' htmlFor="requirements">Deadline</label><br/>
                        <input type="date" id = "deadline" required/><br/>
                    </div>

                    <div className='formContainer'>
                        <label className='required' htmlFor="requirements">Scholarship Requirements</label><br/>
                        <input type="text" id = "requirements" required/><br/>
                    </div>

                </div>
 
                <div className = "requirement-section">
                    <button className='addRequirementBtn'>Add</button>
                </div>  
            </div>
            
                     

            <Footer />
        </div>
    )
}

export default PostDetails