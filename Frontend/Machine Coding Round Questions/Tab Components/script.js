const tabs = document.getElementById('list')
const childs = [...tabs.children]

const section = document.querySelectorAll('section')


let chooseTab = null;

function TabComponents() {

    for (let tab of childs) {
         tab.addEventListener('click', (e) => {
           chooseTab = e.target.dataset.tab

           for(let sec  of section){
            if(sec.id === chooseTab){
                sec.style.display = "block"
            }else{
                sec.style.display = "none"
            }
            
           }
        })
    }
}

TabComponents()