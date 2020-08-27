import React from 'react';


const SubjectShow = (props) => {
    
    const subjectDetails =props.subject;
    const {name, price, img}=subjectDetails;
    console.log(name);
    return (
        
        <div className="card mb-3" style={{width:'100%', paddingLeft:"10px"}}>
        <div className="row no-gutters" style={{margin: "10px"}}>
          <div className="col-md-5">
            <img src={img} className="card-img" alt="..." style={{width:"100%"}}/>
          </div>
          <div className="col-md-7" style={{textAlign:"center"}}>
            <div className="card-body">
              <h5 className="card-title"><strong>Course Name:</strong> {name}</h5>
              <p className="card-text"><strong>Price:</strong> {price}</p>
              <button type="button" className="btn btn-primary" onClick={()=>props.handelAddSubject(props)}>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SubjectShow;

