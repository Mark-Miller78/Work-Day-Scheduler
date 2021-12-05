# Work Day Scheduler

## Description
This work day scheduler is designed to make it easier to keep track of all the tasks the client needs to get done throughout the day. It provides the ability to type in the task, and, on the click of the associated save button, will save the task so it is still present when the client reloads the page. The delete button allows the client to quickly delete the associated task in order to make room for others.

The hour blocks change color based off if they represent a hour that is in the past(gray), present(red), or future(green). This allows for quick references of what is upcoming or what has already passed.

## Technologies Used
    1. HTML
    2. CSS
    3. JQuery
    4. Javascript
    5. Moment.Js
    6. Bootstrap
    7. Font Awesome

## Link and ScreenShot
[Work Day Scheduler](https://mark-miller78.github.io/Work-Day-Scheduler/)

![mark-miller78 github io_Work-Day-Scheduler_](https://user-images.githubusercontent.com/91908196/144675571-7587e3fe-9287-4858-9d6a-83b6851a3562.png)

## 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the [Moment.js](https://momentjs.com/) library to work with date and time, but you're free to use a different JavaScript solution to handle this functionality because Moment.js is considered a "legacy" product. Learn more about these other solutions in the [Moment.js project status page.](https://momentjs.com/docs/#/-project-status/).

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![Work Day Scheduler app with color-coded time slots shows a new event being typed in the 5PM slot.](./Assets/05-third-party-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
