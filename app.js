let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let isPlayer0=true; 

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box, index) => {
    box.addEventListener("click", ()=>{
        if(box.innerText !== "") return; 
        if (isPlayer0) {
            box.innerText="0";
        }else {
            box.innerText="X";
        }         

        isPlayer0 = !isPlayer0;

        checkWin();
 });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    isPlayer0 = true;
});

function checkWin() {
    for (let pattern of winpatterns) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if(box1 !== "" && box1 === box2 && box1 === box3) {
            alert(`Player ${box1} wins`);
            resetGame();
            return;
        }
    }
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = '';
    });
    isPlayer0 = true;
}
        
    






   

    



   

