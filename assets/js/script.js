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

// Function for populating screen with book list
function displayBooks(data) {
    var recommendationHeaderEl = document.createElement('h3');
    var bookListEl = document.createElement('ul');

    recommendationHeaderEl.textContent = 'Recommended Books:';
    savedBookListHeader.textContent = 'Saved Book List:';

    recommendationHeaderEl.classList = 'recommendations-header';
    bookListEl.classList = 'book-list-ul';


    var bookArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (var i = 0; i < bookArray.length; i++) {
        var bookListItemEl = document.createElement('li');
        var bookListImageEl = document.createElement('img');
        var bookListInfoEl = document.createElement('div');
        var bookListTitleEl = document.createElement('p');
        var bookListAuthorEl = document.createElement('p');
        var saveButton = document.createElement('button');

        bookListImageEl.src = "https://covers.openlibrary.org/b/id/" + data.works[i].cover_id + "-M.jpg"; //M is medium. S would be small. L would be large.
        bookListTitleEl.textContent = data.works[i].title
        bookListAuthorEl.textContent = "by " + data.works[i].authors[0].name;
        saveButton.textContent = 'Save Book';

        bookListItemEl.classList = 'book-list-item';
        bookListImageEl.classList = 'book-list-image';
        bookListInfoEl.classList = 'book-list-info-div'
        bookListTitleEl.classList = 'book-list-title';
        bookListAuthorEl.classList = 'book-list-author';
        saveButton.classList = 'save-button';

        bookListInfoEl.appendChild(bookListTitleEl);
        bookListInfoEl.appendChild(bookListAuthorEl);
        bookListInfoEl.appendChild(saveButton);
        bookListItemEl.appendChild(bookListImageEl);
        bookListItemEl.appendChild(bookListInfoEl);
        //Attaching list item to universal ul element
        bookListEl.appendChild(bookListItemEl);

        saveButton.addEventListener('click', addBookToSavedList);
    }

    recommendationHeaderEl.appendChild(bookListEl);
    booksContainer.appendChild(recommendationHeaderEl);
}

//Pulling images, by subject, from the Flickr API
function searchMathImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=calculus&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
}

function searchScienceImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=chemistry&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
}

function searchLiteratureImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=bookpages&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
}

function searchHistoryImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=history&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
}
