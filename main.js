let body = document.body
let form = document.querySelector(".to_do--form");
let input = document.querySelector(".form-control");
let list = document.querySelector(".todos");
let button = document.querySelector(".button")
let modall = document.querySelector("#to__do-modal")

let messageNot = function () {
    if (input.value.length == 0) {
        list.textContent =" "
        input.nextElementSibling.textContent = "Empty message is not included!!!";
        input.nextElementSibling.style.color = "red"
    }
}
let removeModal=function(){
    body.classList.remove("modal-body");
    modall.style.visibility = "hidden";
    modall.style.opacity = "0";
    modall.style.transform = "translate(-50%, -50%) scale(0)";
}
input.addEventListener("keyup", () => {

    input.nextElementSibling.textContent = "Empty message is not included!!!";
    input.nextElementSibling.style.color = "black"

})

input.addEventListener("click", () => {
    messageNot()
})

form.addEventListener("submit", (e) => {
let array=[]
    messageNot()
    if (input.value.length > 0) {
      
        
            list.innerHTML += `<li style="display:flex; justify-content:space-between; align-items:center;" class="list-group-item">
            <span>${input.value}</span>
            <div>
            <button class="btn btn-warning check"><i class="fa-solid fa-check"></i></button>
            <button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
            </div>
            </li>`;
            console.log(input.value);
            input.value = " "
            input.nextElementSibling.textContent = " "
            array.push(input.value)
            console.log(array);
        
    }
    //check
    let check = document.querySelectorAll(".check");;
    check.forEach((value) => {
        value.addEventListener("click", function () {
            this.parentElement.previousElementSibling.style.textDecoration = "line-through";
        })
    })

    //remove
    let remove = document.querySelectorAll(".remove")
  
    remove.forEach((value) => {
        value.addEventListener("click", (e) => {
            e.preventDefault()
            body.classList.add("modal-body");
            modall.style.visibility = "visible";
            modall.style.opacity = "1";
            modall.style.transform = "translate(-50%, -50%) scale(1)";

           
        })

    })

    //
    modall.children[1].children[0].addEventListener("click",()=>{
        removeModal()
        input.parentElement.nextElementSibling.textContent= " "
    })

    modall.children[1].children[1].addEventListener("click",()=>{
        removeModal()

    })
   

    e.preventDefault()
})


