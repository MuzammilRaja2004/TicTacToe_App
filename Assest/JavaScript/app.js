// // My Codee
// let MyDiv = document.querySelector('.inner-extra');
// let apnaapnatags = MyDiv.getElementsByTagName('div');
// let MyArr = [];
// const MyFun = (divsClass) => {
//     return divsClass.className;
// };
// // Run Function Who Is Winner
// const CheckWinner = (loops, mygap1, mygap2) => {
//     if (
//         MyFun(apnaapnatags[loops]) == MyFun(apnaapnatags[loops + mygap1]) && MyFun(apnaapnatags[loops]) == MyFun(apnaapnatags[loops + mygap2])
//         ) {
//             if (MyFun(apnaapnatags[loops]) == 'active1') {
//                 player = "X"
//             }
//             else {
//                 player = "O"
//             }
//             alert(`Player ${player} Is Win`)
//             location.reload()
//         }
//     }
//     // Run Funcation And Check Who Is A Winner 
// function main(id) {
//         let perameter = document.getElementById(id)
//         if (MyArr.length == 0) {
//             perameter.classList.add('active1')
//             MyArr.push('a');
//         }
//     else if (MyArr[0] === 'a') {
//         perameter.classList.add('circel1')
//         MyArr.pop();
//     }
//     for (let i = 0; i <= 6; i += 3) {
//         if (apnaapnatags[i].hasAttribute('class') && apnaapnatags[i + 1].hasAttribute('class') && apnaapnatags[i + 2].hasAttribute('class')) {
//             CheckWinner(i, 1, 2)
//             break;
//         }
//     }
//     for (let j = 0; j < 3; j++) {
//         if (apnaapnatags[j].hasAttribute('class') && apnaapnatags[j + 3].hasAttribute('class') && apnaapnatags[j + 6].hasAttribute('class')) {
//             CheckWinner(j, 3, 6)
//             break;
//         }
//     }
//     if (apnaapnatags[0].hasAttribute('class') && apnaapnatags[0 + 4].hasAttribute('class') && apnaapnatags[0 + 8].hasAttribute('class')) {
//         CheckWinner(0, 4, 4)
//     }
//     if (apnaapnatags[2].hasAttribute('class') && apnaapnatags[4].hasAttribute('class') && apnaapnatags[6].hasAttribute('class')) {
//         CheckWinner(2, 2, 2)
//     }
// }

// Abdullah's Code
let WrapperContainer = document.querySelector(".inner-extra");
let GameDivs = WrapperContainer.getElementsByTagName("div");
let arrayempty = [];
const checkingClass = (divClass) => {
    return divClass.className;
};
const CheckingWinner = (loopNumber, gap1, gap2) => {
if (
    checkingClass(GameDivs[loopNumber]) == checkingClass(GameDivs[loopNumber + gap1]) &&
    checkingClass(GameDivs[loopNumber]) == checkingClass(GameDivs[loopNumber + gap2])
)
     {
        if (checkingClass(GameDivs[loopNumber]) == "active1") {
            playToy = "X";
        }
        else {
            playToy = "0"
        }
        alert(`Player ${playToy} Is Win`)
        location.reload()
    }
}
function main(id) {
    let getid = document.getElementById(id);
    if (arrayempty.length == 0) {
        getid.classList.add("active1");
        arrayempty.push("a");
    } else if (arrayempty[0] === "a") {
        getid.classList.add("circel1");
        arrayempty.pop();
    }
for (let i = 0; i <= 6; i += 3) {
    if (GameDivs[i].hasAttribute("class") && GameDivs[i + 1].hasAttribute("class") && GameDivs[i + 2].hasAttribute("class")) {
        CheckingWinner(i, 1, 2)
        break;
    }
}
for (let j = 0; j < 3; j++) {
    if (GameDivs[j].hasAttribute("class") && GameDivs[j + 3].hasAttribute("class") && GameDivs[j + 6].hasAttribute("class")) {
        CheckingWinner(j, 3, 6)
        break;
    }
}
    if (GameDivs[0].hasAttribute("class") && GameDivs[0 + 4].hasAttribute("class") &&
        GameDivs[0 + 8].hasAttribute("class")) {
        CheckingWinner(0, 4, 4)
    }
    if (GameDivs[2].hasAttribute("class") && GameDivs[4].hasAttribute("class") &&
        GameDivs[6].hasAttribute("class")) {
        CheckingWinner(2, 2, 2)
    }
}
