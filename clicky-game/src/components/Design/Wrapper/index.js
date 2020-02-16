import React from 'react';


const Wrapper = (props) => {

    return(
        <div className="container mb-5">
            {props.children}
        </div>
    )
}




export default Wrapper;