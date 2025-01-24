let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let span = document.querySelector("span")
let res = document.querySelector(".res")
let number = prompt("Bitta kilik nechi baravar bo'lsin")

plus.addEventListener("click", () =>{
    span.textContent = Number(span.textContent) + Number(number);
})

res.addEventListener("click", () => {
    span.textContent = Number(span.textContent=== 0)
})

minus.addEventListener("click", () =>{
    span.textContent = Number(span.textContent) -1;
})


