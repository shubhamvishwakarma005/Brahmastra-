const inputStar = document.getElementsByClassName("fa-star")


function StarPaint() {

    let input = null;

    for (let star of inputStar) {

        star.addEventListener('click', (e) => {
            input = Number(e.target.dataset.rating, 10)
            console.log(input)



            for (let str of inputStar) {
                if (Number(str.dataset.rating) <= input) {
                    str.style.color = "gold"
                }else{
                    str.style.color = "white"
                }
            }

        })
    }


}

StarPaint()