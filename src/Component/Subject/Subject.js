import React ,{useState} from 'react';

import SubjectShow from '../SubjectShow/SubjectShow';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';


const Subject = () => {
    const [subjects, setSubjects] =useState(fakeData);

    const [cart, setCart]=useState([]);

    const handelAddSubject = (subject)=>{
        console.log(subject);
        const newCart = [...cart,subject ];
        setCart(newCart);

        
    }
    
    
    return (
        <div className="row subject-container" style={{display: 'flex'}}>
            <div className="col-md-9 subject">
                {
                     subjects.map(subjects => <SubjectShow subject={subjects} handelAddSubject={handelAddSubject} key={subjects.id}></SubjectShow>)
                }
            </div>
            <div className="col-md-3  ">
                <div className="position-fixed "><Cart cart={cart}></Cart></div>
                
            </div>
    
        </div>
    );
};

export default Subject;