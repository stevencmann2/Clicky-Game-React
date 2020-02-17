import React, { useState } from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
    Wrapper,
} from "./components";
import guitars from './guitars.json'


const App = () => {
    
    const shuffle= (array) =>{
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
    
      const [clickedItems, setClickedItems] = useState([]);
      const [prevTopScore, setPrevTopScore]= useState(0);

     
      
      const topScoreHandler = () => {
        const currentScore = clickedItems.length 
        console.log(currentScore)
        console.log(prevTopScore)
        const newScore= ((currentScore > prevTopScore) ? currentScore : prevTopScore)
        console.log(newScore)
        setPrevTopScore(currentScore)

      }
    

      const GameOver = () => {
       alert('Game over')
       
      }
    
      
      const checkHandler = id =>{
          console.log(clickedItems)
       if(clickedItems.includes(id)) {
            
            GameOver();
        }    
        setClickedItems([id,...clickedItems])  
      
      } 
    
    return(
        <div>
             <Navbar 
             score={clickedItems.length}
             topScore = {topScoreHandler}
             />
                
                <Wrapper>
                
                {shuffle(guitars).map(guitar =>(
                    <MemoryCard
                      key={guitar.id}  
                      id = {guitar.id}
                      name = {guitar.name}
                      bassImage = {guitar.image} 
                      checkHandler = {checkHandler}          
                    /> 
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
