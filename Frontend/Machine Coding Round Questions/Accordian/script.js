const htmlbtn = document.getElementById('html')
const cssbtn = document.getElementById('css')
const jsbtn = document.getElementById('javascript')


const htmlbox = document.getElementById('htmlbox')
const cssbox = document.getElementById('cssbox')
const jsbox = document.getElementById('javascriptbox')

let isAccordOpen = false

function TrackAccord(){
    if(isAccordOpen){
        htmlbox.style.display = 'block'
    }
}