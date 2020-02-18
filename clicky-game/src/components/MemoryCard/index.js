import React from "react";


const MemoryCard = ({
   
    name,
    bassImage,
    id,
    checkHandler,
    
    
})=> {
  
    
   
    return(
        <div className="col mb-2 mt-2" >
            <div className="card m-3" style={styles.bassCard} onClick={()=>checkHandler(id)}>    
            <img className="img-fluid img-thumbnail" style={styles.image} src={bassImage} alt={name}></img>
            </div>
        </div>
    )
}


const styles = {
    bassCard: {
        width: '233px',
        // height: '166px',
        
        // marginBottom: '15px',
        // marginRight: '15px' 
    },
    
   image: {
       cursor: 'pointer'
   }
}


export default MemoryCard;