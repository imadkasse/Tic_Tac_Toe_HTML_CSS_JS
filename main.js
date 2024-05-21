let trun = "X";
let title = document.querySelector(".title");
let res = document.querySelector(".res");
let squ = [];
function end(num1, num2, num3) {
  res.innerHTML = `${squ[num1]} is winner`;
  document.getElementById("item" + num1).style.background = "black";
  document.getElementById("item" + num2).style.background = "black";
  document.getElementById("item" + num3).style.background = "black";
  if(squ[num1]=="X"){
    res.style.background="blue"
  }else if(squ[num1]=="O"){
    res.style.background="gray"
  }
  setInterval(function () {
    res.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
  
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squ[i] = document.getElementById("item" + i).innerHTML;
  }
  // rows
  if (squ[1] == squ[2] && squ[2] == squ[3] && squ[1] != "") {
    end(1,2,3);
  } else if (squ[4] == squ[5] && squ[5] == squ[6] && squ[5] != "") {
    end(4,5,6);
  } else if (squ[7] == squ[8] && squ[8] == squ[9] && squ[7] != "") {
    end(7,8,9);
  }
  //col
  if (squ[1] == squ[4] && squ[4] == squ[7] && squ[4] != "") {
    end(1,4,7)
  } else if (squ[2] == squ[5] && squ[5] == squ[8] && squ[2] != "") {
    end(2,5,8)
  } else if (squ[3] == squ[6] && squ[6] == squ[9] && squ[6] != "") {
    end(3,6,9)
  }
  //cona
  if (squ[1] == squ[5] && squ[5] == squ[9] && squ[5] != "") {
    end(1,5,9)
  } else if (squ[3] == squ[5] && squ[5] == squ[7] && squ[7] != "") {
    end(3,5,7)
  }
  
}

function game(id) {
  let ele = document.getElementById(id);
  if (trun === "X" && ele.innerHTML === "") {
    title.style.background="blue"
    ele.innerHTML = "X";
    trun = "O";
    title.innerHTML = trun;
  } else {
    title.style.background="red"
    ele.innerHTML = "O";
    trun = "X";
    title.innerHTML = trun;
  }
  winner();
}
