let box = document.getElementById('box');
let count = 100;
let trun = null ; 

// var idPos ;


let player1 = document.createElement('div');
           
            player1.style.backgroundColor = 'red';
            player1.style.height='30px';
            player1.style.width='30px';
            player1.style.display='inline-block';
            player1.style.borderRadius='50%';
            player1.innerText ='1';
            player1.style.color ='black'
            player1.style.display= 'flex';
            player1.style.justifyContent="center";
            player1.style.alignItems="center";

            // player1.style.position="absolute"


let player2 = document.createElement('div');
  
    player2.style.backgroundColor = 'orange';
    player2.style.height='30px';
    player2.style.width='30px';
    player2.style.display='inline-block';
    player2.style.borderRadius='50%';
    player2.innerText ='2';
    player2.style.color ='black'
    player2.style.display= 'flex';
    player2.style.justifyContent="center";
    player2.style.alignItems="center";
    // player2.style.position="absolute


    // create box 

    for(let i =0;i<10;i++){

        let b = document.createElement("div");
        b.style.margin= '1px';
        b.style.display= 'flex';

        for(let j =1;j<=10;j++){

            let a = document.createElement("div");
            
            a.style.margin= '1px';
            a.style.marginRight="8px";
            a.style.marginLeft="8px";
            a.style.backgroundColor = 'blue';
            a.style.height='40px';
            a.style.width='40px';
            a.style.display='inline-block';
            a.style.color='#ffffff'
            a.style.fontSize="10px"
            // a.style.position="relative"

            a.setAttribute('id',`${count}`);
            b.appendChild(a)

            if(i%2 !== 0){
                    b.style.flexDirection ='row-reverse';
                }

            a.innerText = (count--);

        }


        box.appendChild(b);
        let br = document.createElement('br');
        box.appendChild(br);
    }




let btn = document.getElementById('btn');

const min = 1;
const max = 6;

let onePos = document.getElementById('1');
let twoPos = document.getElementById('1');

onePos.appendChild(player1);
twoPos.appendChild(player2);

let poscountp1 = 1;
let poscountp2 = 1;

trun = 'p1' ;



btn.addEventListener('click',(e)=>{

    let turn1  = document.getElementById('turn');
    let value = Math.floor(Math.random() * (max - min + 1)) + min;
    turn1.innerText = value;

if(trun === 'p1'){

    if(poscountp1 + value <= 100){
        poscountp1 += value;
        increment(poscountp1,player1);
        console.log(poscountp1);
       
    }
    if(poscountp1 === 100){
        winner('player 1');
    }
   

    trun = 'p2';

}else if(trun === 'p2'){
    
    if(poscountp2 + value <= 100){
        poscountp2 += value;
        increment(poscountp2,player2);
        console.log(poscountp2," poscountp2");
        
    }
    if(poscountp2 === 100){
        winner('player 2')
    }
    
    trun = 'p1';
}



},false);




function increment(poscount,player){
    let pos = null;
    try{
        pos = document.getElementById(`${poscount}`);
        pos.appendChild(player);

        // var idPos = parseInt(player.parentNode.id);

        // console.log(idPos);
        // trun = 'p1';
        // console.log(trun," else if");

    }catch (error){
        console.log(error)
    }

    
}

 
function winner(pla){

    let othersecton = document.getElementById('otherSection');
    abc = document.createElement('h1');
    abc.innerText=`winner ${pla}` ;

    othersecton.appendChild(abc);
    btn.disabled = true;


} 
