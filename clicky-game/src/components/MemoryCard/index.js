import React, { useState } from "react";
import guitars from '../../guitars.json'
const MemoryCard = ({
   
    name,
    bassImage,
    id
})=> {
  
    const [count, setCount] = useState(0);
    const [guitarOrder, serGuitarOrder] = useState(guitars)

    const handleIncrement = () => {
        const increase = count + 1;
        if(increase === 2){
            console.log('this ran correctly')
            alert('game over')
        }
        setCount(increase);
        console.log(increase)
    };
    const shuffleHandler= (array) =>{
        let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }

    return(
        <div className="col" >
            <div className="card m-3" style={styles.bassCard} onClick={handleIncrement, shuffleHandler}  >
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