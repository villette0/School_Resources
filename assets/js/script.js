// Universal Variables
var main = document.querySelector('.main');
var mathButton = document.querySelector('.math-button');
var literatureButton = document.querySelector('.literature-button');
var scienceButton = document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');
var booksContainer = document.querySelector('.books-container');
var imageContainer = document.querySelector('.image-container');
var triviaContainer = document.querySelector('.trivia-container');
var savedBooksContainer = document.querySelector('.saved-books-container');
var heroContainer = document.querySelector('.hero');
var savedBookListHeader = document.querySelector('.saved-book-list-header');
var savedBooksUl = document.querySelector('.saved-books-ul');

// Subject Button Event listeners
mathButton.addEventListener('click', mathFunc);
literatureButton.addEventListener('click', literatureFunc);
scienceButton.addEventListener('click', scienceFunc);
historyButton.addEventListener('click', historyFunc);

// Grabs data from library api and then displays book results
function searchBooks() {
    var buttonText = event.target.textContent;
    var lowercaseButtonText = buttonText.toLowerCase();
    console.log(buttonText)
    var apiUrl = "https://openlibrary.org/subjects/" + lowercaseButtonText + ".json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayBooks(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
}