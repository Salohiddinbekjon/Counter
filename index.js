let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let span = document.querySelector("span")

plus.addEventListener("click", () =>{
    span.textContent = Number(span.textContent) +1;
})

minus.addEventListener("click", () => {
    span.textContent = Number(span.textContent=== 0)
})