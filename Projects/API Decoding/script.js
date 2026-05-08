const url = "https://api.freeapi.app/api/v1/public/books"
const option = {
    method: "GET",
    headers: {
        accept: 'application/json',
    },
};


const bookImg = document.getElementById('book-img');
const bookName = document.getElementById('Book-Name');
const bookAuthor = document.getElementById('Author-Name');
const publisherName = document.getElementById('publisher-name');
const bookPrice = document.getElementById('price');
const publisherDate = document.getElementById('publisher-date');



async function fetchBooks() {
    try {
        const response = await fetch(url, option);
        const result = await response.json()
        // const books = data.data.data

        const commonInfo = result.data.data[0];

        // Image
        bookImg.src = commonInfo.volumeInfo.imageLinks.thumbnail;

        // Title
        bookName.textContent = commonInfo.volumeInfo.title;

        // Author
        bookAuthor.textContent = commonInfo.volumeInfo.authors;

        // Publisher
        publisherName.textContent = commonInfo.volumeInfo.publisher;

        // Published Date
        publisherDate.textContent = commonInfo.volumeInfo.publishedDate;

        // Price
        bookPrice.textContent = commonInfo.saleInfo.listPrice.amount;


    } catch (error) {
        console.error(error)
    }
}

fetchBooks()









