import React, { useState} from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
    Wrapper,
    Jumbotron
} from "./components";
import guitars from './guitars.json'
import lowEnd from './assets/images/bassFish.jpg'


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
      const [message, setMessage ]= useState('Begin by clicking an image')
     
      const textHandler = val => {
        console.log(val)
        const correct = "Correct! You're hitting all the right notes";
        const incorrect = "You're no Miles Davis, click an image to play again"
       const resultMessage = (val ? correct : incorrect)
       setMessage(resultMessage)
        
      }
      
      const topScoreHandler = () => {
        const currentScore = clickedItems.length 
        const newScore= ((currentScore > prevTopScore) ? currentScore : prevTopScore)
        setPrevTopScore(newScore)
      }
    
      const GameOver = () => {
       alert('Game over')
       topScoreHandler()
       setClickedItems([])

      }
   
      const checkHandler = id =>{
          console.log(clickedItems)
       if(clickedItems.includes(id)) {
            textHandler(false)
            return GameOver();
        }    
        textHandler(true)
        setClickedItems([id,...clickedItems])  

        
      
      } 
    
    return(
        <div style={styles.backdrop}>
             <Navbar 
             textResult = {message}
             score = {clickedItems.length}
             topScore = {prevTopScore} 
             /> 
             <Jumbotron/>
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


const styles = {
  backdrop: {
      backgroundImage: `url(${lowEnd})`

  }
}


export default App;
