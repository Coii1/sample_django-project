//postDetails.jsx
import '../styles/postDetails.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function PostDetails() {
    return(
        <div className='postDetails'>
            <Header />

            <div className='postScholarshipContent'>
                <h2>Post new scholarship</h2>

                <div className='postScholarshipForm'>

                    <div className="mb-3">
                        <label className='required form-label' htmlFor="title">Scholarship title</label>
                        <input type="text" className="form-control title" id="title" required/>
                    </div>

                    <div className='mb-3'>
                        <label className='required form-label' htmlFor="numSlots">Number Of Slots Available</label><br/>
                        <input type="number" id="numSlots" min={1} max={1000} required/><br/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="qualifications" className="required form-label">Qualifications</label>
                        <textarea className="form-control" id="qualifications" rows="7"required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="benefits" className="required form-label">Benefits</label>
                        <textarea className="form-control" id="benefits" rows="5"required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="instructions" className="required form-label">Instructions</label>
                        <textarea className="form-control" id="instructions" rows="5"required></textarea>
                    </div>

                    {/* APPLICATION PERIOD */}
                    <div class="row mb-3 applicationPeriodContainer">
                        <label className='required applicationPeriod' htmlFor="applicationPeriod">Application Period</label>
                        
                        <div class="col startDate">
                            <label className='required startDate' htmlFor="applicationPeriod">Starting date</label>
                            <input type="date" className="form-control" id = "startDate" required/>
                        </div>
                        <div class="col endDate">
                            <label className='required endDate' htmlFor="applicationPeriod">End date</label>
                            <input type="date" className="form-control" id = "endDate" required/>
                        </div>
                    </div>

                    {/* DEADLINE */}
                    <div className='mb-3'>
                        <label className='required deadline' htmlFor="deadline">Deadline</label>
                        <input type="date" className="form-control" id = "deadline" required/>
                    </div>

                    <div className='mb-3'>
                        <label className='required requirements' htmlFor="requirements">Scholarship Requirements</label>
                        <textarea class="form-control" id="instructions" rows="5"required></textarea>
                        
                        <div className = "requirement-section">
                            <button type="button" className="addRequirementBtn btn btn-danger">Add requirement</button>
                        </div> 
                    </div>

                    <div className='option'>
                        <button type="button" className="cancelBtn btn btn-secondary">Cancel</button>
                        <button type="button" className="postBtn btn btn-success">Post scholarship</button>
                    </div>

                </div>
 
                 
            </div>
            
                     

            <Footer />
        </div>
    )
}

export default PostDetails