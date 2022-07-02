export const randomArray = ()=>{

    const arr =  [
        {id:1,emoji:'🤡',status: ''},
        {id:2,emoji:'👽',status: ''},
        {id:3,emoji:'💎',status: ''},
        {id:4,emoji:'🎱',status: ''},
        {id:5,emoji:'🍒',status: ''},
        {id:6,emoji:'💖',status: ''},
        {id:7,emoji:'🐷',status: ''},
        {id:8,emoji:'🚀',status: ''},
        {id:1,emoji:'🤡',status: ''},
        {id:2,emoji:'👽',status: ''},
        {id:3,emoji:'💎',status: ''},
        {id:4,emoji:'🎱',status: ''},
        {id:5,emoji:'🍒',status: ''},
        {id:6,emoji:'💖',status: ''},
        {id:7,emoji:'🐷',status: ''},
        {id:8,emoji:'🚀',status: ''},];;

    const randomArr=[];

    const size = arr.length;
    for(let i= 0;i<size;i++){
        const randomIndex = Math.floor(Math.random() * arr.length);
        randomArr.push(arr[randomIndex]);
        arr.splice(randomIndex,1)
    }
    return randomArr
};



