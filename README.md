# School Resources

## Website Description
This website application is a study helper for students with their school subjects. When pressing a button that indicates their desired subject, users are presented with recommended books, a photo, and a trivia question from that subject. Users may save and view a list of books that interest them. 

## Challenge Description
Three API's are used to generate the user desired subject matter. An API from Flickr is used for the subject image, an API from OpenLibrary is used for the subject books, and an API from Open Trivia Database is used for the subject trivia question. Local storage is used to save a list of books chosen by the user and populate the list to the left column of the screen. Users can save books from multiple subjects to this list. The CSS Framework that was used is Bulma. The user input and interactivity is their desired school subject as well as selected books and trivia choice. The responsive view is that the buttons and columns align vertically when reduced to a mobile screen size.  Future expansion of the application could include more school subjects or extracurricular subjects such as health, physical education, art, theatre, or psychology.

## Acceptance Criteria

```
Use a CSS framework other than Bootstrap.
Be deployed to GitHub Pages.
Be interactive (i.e: accept and respond to user input).
Use at least two server-side APIs.
Does not use alerts, confirms, or prompts (use modals).
Use client-side storage to store persistent data.
Be responsive.
Have a polished UI.
Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id-naming conventions, indentation, quality comments, etc.).
Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

```
## User Story
User Story:
As a user, I want to have access to resources defined by subject so that I can easily search and have access to useful and appropriate resources. 
As a user, I want to see names and book covers of books relating to the subject I am studying.
As a user, I want to have a way to create a ‘Saved List’ to log books that I find helpful.

## Tasks Completed
The HTML document includes:
* a proper title and SEO metadata
* proper semantic labelling and organization of elements
* placeholders within element containers for future JavaScript dynamic HTML
* links to stylesheet, custom css, and Bulma CSS library
* comments

The CSS document includes:
* universal variables for repeated colors
* elements for styling
* classes that include the hero, trivia/image/booklist containers, buttons, etc.
* hover classes for various colors to display via JavaScript If/Else statements
* dynamically changed CSS for elements to display or hide in visibility
* comments

The JavaScript document includes:
* variables for query selectors, creating elements, and creating arrays
* functions that cover removing, fetching, populating, and saving elements or data
* three API's that have data fetched and utilized to be displayed on the screen via user input
* localStorage saving, retrieval, and displaying

## Languages & Tech
- HTML
- CSS
- JavaScript
- API's: Flickr, Open Library, Open Trivia Database

## Links
* [Deployed-webpage](https://villettec.github.io/School_Resources/)

* [Repository](https://github.com/villettec/School_Resources)

## Screenshot
![Image](./assets/images/readme-screenshot.png)
![Image](./assets/images/readme-screenshot2.png)

## Credit
Villette Comfort

villette@live.com