const Add = document.getElementById('addBtn')
const Delete = document.getElementById('delBtn')
const Input = document.getElementById('input-box')
const List = document.getElementById('list-items')


Add.addEventListener('click', ()=>{

    (Input === "") ? alert("Enter Value") : "";

    // add 
    let list = document.createElement("li")
    list.innerText = Input.value;
    List.appendChild(list)
    

    // delete 
    Delete.addEventListener('click', ()=>{
        list.remove()
    })

    Input.value = " ";
})





// function AddElmt(...items){
//     return items
// }

