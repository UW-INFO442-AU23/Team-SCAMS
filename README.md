# GoGreen
## Team 3 Scams
Group Members: Sabrina Lin, Claire Lai, Alyson Yu, Mari Woodworth, Sarah Chu 

## Our Mission
The transportation sector stands as the leading contributor to greenhouse gas emissions, accounting for 28% of total emissions in 2021 (Sources of greenhouse gas emissions | US EPA 2021). Our web application is focused around [UN Sustainable Goal 13]([url](https://sdgs.un.org/goals/goal13)): Climate Action. According to Goal 13, we need to take action to combat climate change through policies and education. Our mission is to encourage residents of Seattle to utilize more sustainable modes of daily transportation in order to reduce their carbon footprint. Thus, our **How Might We** statement is: How might we encourage residents of Seattle to utilize more sustainable modes of transportation in order to reduce their carbon footprint?  

## GitHub Links
GitHub Repo link: https://github.com/UW-INFO442-AU23/team-scams
GitHub Pages link:

## Key Features
* Carbon Emissions Calculator
* Interactive Transportation Knowledge Quiz
* Resources Page
* Scores/Results and Correct Answer for Knowledge Quiz

## Modes of Transportation In Carbon Emissions Calculator
* Biking
* Bus
* Car
* Carpool
* Link Light Rail
* Plane
* Train
* Walking

_________

## User Personas
View our user personas here: https://drive.google.com/file/d/1Toz8Tbt1K45uOd2hNt1QswbnrTUZuDaJ/view?usp=drive_link

________

## Development Instructions

### Built with
* HTML
* CSS
* Javascript
* React

### Start Localhost
```npm start```
```Ctrl + C``` to cancel

### Deploy Build to GitHub Pages
```npm run deploy```

### Testing Protocol - Acceptance Tests
**Calculator**  
Test Scenario: User calculates carbon emissions

| Test Case/Step | Successful Test | Failed Test |
| ------------- | ------------- | ------------- |
| Database is set up | Features are displayed on website, calculator is able to perform carbon emission correctly | Features do not render properly, calculator is disconnected from the database |
| User can navigate to the calculator page | User is able to navigate to the right page to calculate carbon emissions | User navigates to a different page that is not the calculator page or receives a 404 error |
| User types distance into calculator | User can type into the box and when they click submit, it only goes through if they type in a valid input (integers to the first decimal point). | User cannot type into the text box reserved for the calculator, or they are able to type invalid characters without an error message showing up when they click submit |
| User chooses preferred mode of transportation using the drop-down menu | User can select one mode of transportation. When clicked, the drop-down box highlights the chosen mode. | User is unable to select an option in the drop-down menu, is able to select multiple options, is not able to select any options, or the user does not see any options when clicking the drop-down. |
| User clicks on the submit button | Clicking on submit button calculates the carbon emissions total and leads user to results page. | Clicking on submit button loses submission or does not take the user to the results page |
| User receives calculator results | Results of carbon emissions should be accurate to the mileage submitted by user, and should display the appropriate modes of transportation | Results are invalid as they do not show the right amount of carbon emissions per mode of transportation |
  
**Quiz**  
Test Scenario: User takes knowledge quiz

| Test Case/Step | Successful Test | Failed Test |
| ------------- | ------------- | ------------- |
| Database is set up | Features are displayed on website, quiz questions render, quiz results is able to be displayed | Features do not render properly, quiz is disconnected from the database |
| User navigates to the quiz page | User is able to navigate to the right page to take the knowledge quiz | User navigates to a different page that is not the quiz page or receives a 404 error |
| User selects an answer for a question from 2 or 4 options | Only one choice is able to be selected at a time, and the selected answer choice should be highlighted | Multiple answers are selected, or none at all, or the answer chosen is not obvious to the user |
| User clicks on the submit button after filling out every question on the quiz | Clicking on submit button after completing quiz leads to quiz results page and calculates quiz score | Clicking on submit button does not lead user to quiz results page while saving the user’s answers |
| User receives quiz results | Correct score is displayed, as well as the correct answers to the questions | Incorrect score is displayed (or not at all), and correct answers are not displayed |

## References
[insert references here]
_Sources of greenhouse gas emissions_ | US EPA. (n.d.). https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions
