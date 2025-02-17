let turn='O';
let total_turn=0;
let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let boardarry=new Array(9).fill("E");

function checkwinner(){
    for(let [index0,index1,index2] of winner){
        //   console.log(i);
        if(boardarry[index0]!="E" && boardarry[index0]===boardarry[index1]
            && boardarry[index1]===boardarry[index2]);
            return 1;

    }
    return 0;
}

// const boardarry=new Array(9).fill("E")

const printer=(event)=>{
    // console.log(event.target.id);
    const element=event.target;
    // element.innerHTML="o";
    if(boardarry[element.id]==="E")
  {

       total_turn++;
      if(turn==='O')
       {
        element.innerHTML="O";
        boardarry[element.id]="O";
        if(checkwinner())
        {
            document.getElementById('winningmessage').innerHTML="winer is O";
            board.removeEventListener('click',printer);
        }
        
        turn="X";
      }
       else
       {
        element.innerHTML="X";
        boardarry[element.id]="X";
        if(checkwinner())
        {
            document.getElementById('winningmessage').innerHTML="winer is x";
            board.removeEventListener('click',printer);
            return;
        }
        turn="O";
    }
      if(total_turn==9){
        document.getElementById('winningmessage').innerHTML="Match is Draw";
      }
  }
    
}


const board=document.querySelector(".board");
board.addEventListener('click',printer);

const restart=document.getElementById('resturant-btn');
restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    turn="O";
    total_turn=0;
    boardarry=new Array(9).fill("E");
    board.addEventListener('click',printer);
})
//     // console.log(event.target.id);
//     const element=event.target;
//     // element.innerHTML="o";
//     if(boardarry[element.id]==="E")
//   {

    
//       if(turn==='o'){
//         element.innerHTML='o'
//         boardarry[element.id]="o";
//         if(checkwinner()){
//             document.getElementById('winningmessage').innerHTML="winer is o";
//         }
//         turn='x';
//       }
//        else{
//         element.innerHTML='x';
//         boardarry[element.id]="x";
//         if(checkwinner()){
//             document.getElementById('winningmessage').innerHTML="winer is x";
//         }
//         turn='o';
//      }
//     }
// })
    
