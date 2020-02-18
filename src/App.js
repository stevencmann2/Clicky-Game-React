import React, { useState } from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
    Wrapper,
    Jumbotron
} from "./components";
import guitars from './guitars.json'
import lowEnd from './assets/images/bassFish.jpg'
import { Shake } from 'reshake'



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
      const [message, setMessage ]= useState('Begin by clicking an image.')
      const [textColor, setTextColor] = useState({color:'FFFFFF'})
      const [shakeNow, setShakeNow] = useState(false)
     
      const textHandler = (val, color) => {
        const correctText = "Correct! You're hitting all the right notes.";
        const incorrectText = "Well you're no Miles Davis! Click any image to play again."
        const correctColor = {color: '#66ff33'}
        const incorrectColor = {color: '#ff3300'}
        const resultMessage = (val ? correctText : incorrectText)
        const colorResult= (val ? correctColor : incorrectColor)
        setMessage(resultMessage)
        setTextColor(colorResult)
        setShakeNow(!val)
        
      }
      
      const topScoreHandler = () => {
        const currentScore = clickedItems.length 
        const newScore= ((currentScore > prevTopScore) ? currentScore : prevTopScore)
        setPrevTopScore(newScore)
      }
    
      const GameOver = () => {
        topScoreHandler()
        setClickedItems([])
      
      }
   
      const checkHandler = id =>{
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
             color={textColor}

             /> 
             <Jumbotron/>
             <Shake active={shakeNow}>
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
                </Shake>
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
