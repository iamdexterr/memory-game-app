import React,{useState} from 'react'
import Card from './Card'
import {randomArray} from '../HelperFunction';
import Confetti from 'react-confetti'

const Grid = () => {

    const [emoji,setEmoji] = useState(randomArray().slice());
    const [prev,setPrev] = useState(-1);
    const [moves,setMoves] = useState(0);
    const [playAgain,setPlayAgain] = useState(false);


    const check=(indexid)=>{
      
        if(emoji[prev].id=== emoji[indexid].id){
            emoji[indexid].status=' correct';
            emoji[prev].status=' correct';
            setEmoji([...emoji]);
            setPrev(-1);
            setMoves((prevMoves)=>prevMoves+1);
            const len = emoji.filter(emo=>{
               return emo.status.includes('correct')
            }).length; 
            if( len >=16){
                setPlayAgain(true)
            }
        }
        else{
           
            emoji[indexid].status='wrong';
            emoji[prev].status='wrong';
            setEmoji([...emoji])
            setPrev(-1)
            setMoves((prevMoves)=>prevMoves+1);

            
            setTimeout(()=>{
                emoji[indexid].status='';
                emoji[prev].status='';
                setEmoji([...emoji])

                            
            },1000)
        }
    }

    const clickHandler=(indexId)=>{
       
        console.log(emoji);
        if(indexId===prev || emoji[indexId].status.includes('correct')){
            return
        }

       
        if(prev===-1){
    
            emoji[indexId].status='active';
            setEmoji([...emoji])
            setPrev(indexId);
        }
        else{
            check(indexId);
        }
         
    }

    const restartHandler=()=>{
    setMoves(0);
    setPlayAgain(false);
    setEmoji(randomArray().slice())
    }

    const content = emoji.map((emo,index)=>{
     return <Card key={index} ind={index } data={emo} onCardClick={clickHandler}/>

    })

  return (<>
    <div className='card-container'>
        {content}

    </div>
      <h2 className='sub-heading'>Moves : {moves}</h2>
      {playAgain && <button className='btn' onClick={restartHandler}>Play Again</button>}
      {playAgain && <Confetti min-height='100vh' />} 
    </>
  )
}

export default Grid