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
       
    const [count, setCount] = useState(0);
    

    const handleIncrement = (id) => {
        const increase = count + 1;
        if(increase === 2){
            console.log('this ran correctly')
            alert('game over')
        }
        setCount(increase);
        console.log(increase)
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
                      handleIncrement = {handleIncrement}
                    />
                  
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
