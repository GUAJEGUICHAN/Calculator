const num = document.querySelectorAll(".number");
const op = document.querySelectorAll(".operator");
const display = document.querySelectorAll(".display");
const result = document.querySelector(".result");
const allClear = document.querySelector(".allClear");
const del = document.querySelector(".delete");
const operandCal = [];
const operatorCal = [];

num.forEach(n => {
  n.addEventListener("click", () => {
    //if (operandCal[0] === "끝") {display[0].innerHTML = "";display[1].innerHTML = "";operandCal.splice(0);}
    console.log(n.innerText);
    display[1].innerHTML += n.innerText;
  });
});

op.forEach(o => {
  o.addEventListener("click", () => {
    if (display[1].innerHTML === "") return;
    if (display[0].innerHTML.includes("=")) display[0].innerHTML = "";
    // if (operandCal.length > operatorCal.length) operandCal.pop();
    operandCal.push(Number(display[1].innerHTML));
    operatorCal.push(o.innerText);
    console.log(o.innerText);
    display[0].innerHTML += display[1].innerHTML + o.innerText;
    display[1].innerHTML = "";
  });
});

result.addEventListener("click", () => {
  if (operandCal.length === 0) return;
  operandCal.push(Number(display[1].innerHTML));
  display[0].innerHTML += display[1].innerHTML + "=";
  console.log("계산 전 상태:", operandCal, operatorCal);
  for (let i = 0; i < operatorCal.length; i++) {
    if (operatorCal[i] === "*" || operatorCal[i] === "/") {
      if (operatorCal[i] === "*") {
        operandCal[i] *= operandCal[i + 1];
        console.log("곱했다. 현 상태:", operandCal, operatorCal);
      } else if (operatorCal[i] === "/") {
        operandCal[i] /= operandCal[i + 1];
        console.log("나눴다. 현 상태:", operandCal, operatorCal);
      }
      operandCal.splice(i + 1, 1);
      operatorCal.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < operatorCal.length; i++) {
    if (operatorCal[i] === "+" || operatorCal[i] === "-") {
      if (operatorCal[i] === "+") {
        operandCal[i] += operandCal[i + 1];
        console.log("더했다. 현 상태:", operandCal, operatorCal);
      } else if (operatorCal[i] === "-") {
        operandCal[i] -= operandCal[i + 1];
        console.log("뺐다. 현 상태:", operandCal, operatorCal);
      }
      operandCal.splice(i + 1, 1);
      operatorCal.splice(i, 1);
      i--;
    }
  }
  console.log("최종 상태:", operandCal, operatorCal);
  display[1].innerHTML = operandCal.pop();
});

allClear.addEventListener("click", () => {
  operandCal.splice(0);
  operatorCal.splice(0);
  display.forEach(d => {
    d.innerHTML = "";
  });
});

del.addEventListener("click", () => {
  console.log(display[1].innerHTML);
  display[1].innerHTML = "";
});
