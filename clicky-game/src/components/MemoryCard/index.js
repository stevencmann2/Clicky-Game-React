import React from "react";

const MemoryCard = ({
   
    name,
    bassImage,
    id,
    clickHandler,
    
    
})=> {
 

    return(
        <div className="col" >
            <div className="card m-3" style={styles.bassCard} onClick={()=>clickHandler(id)} >
                <img className="card-img-top" src={bassImage} alt={name}></img>
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