import React from "react";
import { Shake } from 'reshake'


const MemoryCard = ({
   
    name,
    bassImage,
    id,
    checkHandler,
    
    
    
})=> {
   
  
    
   
    return(
        <Shake 
       
        h={15}
        v={0}
        r={9}
        dur={1000}
        int={20.2}
        max={100}
        fixed={false}
        fixedStop={false}
        freez={true}>
        
        <div className="col mb-2 mt-2" >
            <div className="card m-3" style={styles.bassCard} onClick={()=>checkHandler(id)}>    
            <img className="img-fluid img-thumbnail" style={styles.image} src={bassImage} alt={name}></img>
            </div>
        </div>
        </Shake>
    )
}


const styles = {
    bassCard: {
        width: '200px',
        boxShadow: '0 8px 6px -6px black' 
    },
    
   image: {
       cursor: 'pointer'
   }
}


export default MemoryCard;