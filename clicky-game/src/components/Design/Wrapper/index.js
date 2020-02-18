import React from 'react';



const Wrapper = (props) => {

    return(
        <div className="container mb-5 mt-5 pt-5">
            <div className="row">
            {props.children}
            </div>
        </div>
    )
}




export default Wrapper;