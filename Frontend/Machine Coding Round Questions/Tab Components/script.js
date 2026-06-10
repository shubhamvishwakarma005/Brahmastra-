const navs = document.getElementById('list')
const tabs = [...navs.children]
const sections = document.querySelectorAll('section')


function TabComponents(){

    let inputs = null;

    for(let tab of tabs){
        tab.addEventListener('click', (e)=>{
            inputs = e.target.dataset.tab
            
            for(let section of sections){
                if(section.id === inputs){
                    section.style.display = "block"
                }else{
                    section.style.display = "none"
                }

            }
            
        })
    }
}

TabComponents()