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
    
      const [guitarsList, setGuitarsList]= useState(guitars);
    
      const [clickedItems, setClickedItems] = useState([])

      const GameOver = () => {
          alert('GAme over')
      }
      
      const checkHandler = id =>{
       if(clickedItems.includes(id)) {
            GameOver();
        }    
        setClickedItems([id,...clickedItems])          
      } 
      
    const clickHandler = id => { 
        const filteredGuitars = guitarsList.filter(guitar => guitar.id!==id)
        setGuitarsList(filteredGuitars)
    };

    
   
    return(
        <div>
             <Navbar />
                
                <Wrapper>
                
                {shuffle(guitars).map(guitar =>(


                    <MemoryCard
                      key={guitar.id}  
                      id = {guitar.id}
                      name = {guitar.name}
                      bassImage = {guitar.image} 
                      clickHandler = {clickHandler, checkHandler}
                    
                    
                    />
                  
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
