const Stars = document.getElementsByClassName('fa-star')

function StarRating() {

    let input = null;

    for (let values of Stars) {
        values.addEventListener('click', (e) => {
            input = Number(e.target.dataset.rating)
            // console.log(input)

            for(let star of Stars){
                if(Number(star.dataset.rating) <= input){
                    star.style.color = "gold"
                }else{
                    star.style.color = "white"
                }
            }
        })
    }

}

StarRating()