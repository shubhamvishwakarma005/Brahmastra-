const signbtn = document.getElementById('Signupbtn')
const sections = document.getElementById('model-section')
const closebtn = document.getElementById('hero')
let isModelOpen = false;

function openModal(){
    if(isModelOpen){
        sections.style.display = 'block'
    }else{
        sections.style.display = "none"
    }
}

function ModelComponents(){

    signbtn.addEventListener('click', ()=>{
        isModelOpen = true;
        openModal()
    })

    closebtn.addEventListener('click', (e)=>{
        if(e.target === closebtn){
            isModelOpen = false
            openModal()
        }
    })


}

openModal()
ModelComponents()