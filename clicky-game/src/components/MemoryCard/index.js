import React, { useState } from "react";

const MemoryCard = ({
   
    name,
    bassImage,
    id,
    handleIncrement
})=> {
 

    return(
        <div className="col" >
            <div className="card m-3" style={styles.bassCard} onClick={handleIncrement} >
                <img className="card-img-top" src={bassImage} alt={name} id={id}></img>
            </div>
        </div>
    )
}


const styles = {
    bassCard: {
        width: '18rem'
    },
}


export default MemoryCard;