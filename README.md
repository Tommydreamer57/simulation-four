<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, you'll create the front-end of a full-stack trivia application. The back-end will shared across DevMountain so don't put anything inappropriate or offensive on there.

Live example: <a href="https://practiceapi.devmountain.com/trendingTrivia/">Click Me!</a>

## API Reference

You can find the API documentation for all the endpoints here : https://practiceapi.devmountain.com/

## Requirement 1

### Summary

Trivia questions should be pulled from the API and then shown on the screen.

### Details

Data will be sent in pages from the API. Remember: a page of data is a small slice of all the questions on the server. IE - you will only get 10 at a time.

A user should be able to click next page to get the next 10 questions, and previous page to get to the previous 10 questions.

<img src="https://github.com/DevMountain/trendingTrivia/blob/master/screenshot/screenshot1.jpg" />

## Requirement 2

### Summary

Questions should be marked for correct and incorrect answers.

### Details

When the user selects an answer highlight the question card:
- Red for incorrect
- Green for correct 

<img src="https://github.com/DevMountain/trendingTrivia/blob/master/screenshot/screenshot3.jpg" />

## Requirement 3

### Summary

Users should be able to filter questions.

### Details

* A user should be able to filter by:
  * all questions
  * easy, medium, and hard diffuculty questions
  * Questions about a specific animal

Make the `Search by Animal` button trigger whether the animal name input box is visible or not.
Make the input box filter all questions on the screen, and only the questions on the screen.

<img src="https://github.com/DevMountain/trendingTrivia/blob/master/screenshot/screenshot4.jpg" />

## Requirement 4

### Summary

Functionality for editing/deleting questions.

### Details

* Add a gear to every question. The icon is found in the `styes/assets` folder.
  * When the gear is clicked for a question, it needs to open the edit modal, and populate the modal with that questions data.
  * The modal will allow users to edit and delete questions.
* in main.css search for `ALERTDELETEME` and remove the line it is on.  This will make the modal appear.
  * The edit modal is already in the index.html file.  You will need to use ng-show or ng-hide to make it appear when the user clicks the gear icon.
  * The edit modal should only show the `edit & delete question buttons` at the bottom, and should hide the `add question buttons`.  These two button groups are labeled in the index.html file.
* Editing a question will PUT that question to the server.
* Deleting a question will DELETE that question from the server.

<img src="https://github.com/DevMountain/trendingTrivia/blob/master/screenshot/screenshot2.jpg" />

## Requirement 5

### Summary

Adding new questions to the application.

### Details

* Add question will use the same modal as the edit.
* The `add question buttons` need to be visible, and the `edit & delete question buttons` need to be hidden.
* Add a question will post it to the server.

## Requirement 6

### Summary

Application styles.

### Details.

* We have put styles for everything in the styles folder, but you can choose make your own or use those.  Just make it look the same.
* There some effects when hovering over a question, and over the gear.  Try to get those as well.

## Black Diamond

Remember the user's answers on local storage.

## References

### Data Structure

The data structure of a trivia question looks like:

```js
{
  _id: {type: String}, (The API will add this for you, do not send it to the server)
  question: {type: String},
  animal: {type: String},
  difficulty: {type: Number},
  options: {
    1: {type: String},
    2: {type: String},
    3: {type: String},
    4: {type: String}
  },
  correct_answer: {type: Number},
  date_entered: {type: Date, default:new Date()}
}
```
