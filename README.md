<h1 align="center">Go Green</h1>

<h2 align="center">Team 3 SCAMS</h2>

<p align="center">Group Members: Sabrina Lin, Claire Lai, Alyson Yu, Mari Woodworth, Sarah Chu </p>

## Background
Within the last 10 years, billions of people died due to natural disasters caused by human-generated carbon emissions, ranging from floods to droughts to hurricanes (United Nations Sustainable Development, 2023). The transportation sector stands as one of the leading contributors to greenhouse gas emissions, accounting for 28% of total emissions in 2021 (US EPA, 2021). Cars and other vehicles are a common household source of carbon emissions as many rely on them as transportation to and from work/school. According to the United States Environmental Protection Agency (EPA), while the number varies due to factors such as fuel economy, the average carbon a typical passenger vehicle “emits about 4.6 metric tons of carbon dioxide per year” (Environmental Protection Agency, 2023).

Everyone across the globe will experience the devastating impacts of climate change. It is incredibly important that we take steps to reduce our carbon emissions; human health, ecosystem health, and urban infrastructure will be at risk if we don’t take action soon (United Nations Sustainable Development, 2023). 


## Our Mission
Our web application is focused on [UN Sustainable Goal 13]([url](https://sdgs.un.org/goals/goal13)): Climate Action. According to Goal 13, we need to take action to combat climate change through policies and education. Our mission is to encourage residents of Seattle to utilize more sustainable modes of daily transportation in order to reduce their carbon footprint. Thus, our **How Might We** statement is: How might we encourage residents of Seattle to utilize more sustainable modes of transportation in order to reduce their carbon footprint?  

## Important Links
The published site can be viewed here: https://team-scams.vercel.app/home    
GitHub Repo link: https://github.com/UW-INFO442-AU23/team-scams  

## Key Features
**Carbon Emissions Calculator**
* Users can calculate their carbon emissions by inputting the distance they intend to travel (in miles) and mode of transportation.
* After clicking submit, users can see how close their CO2 emissions is to 0g and learn about alternative modes of transportation that have a lower carbon emissions output.

**Resources**
* Users can find relevant information and resources about sustainable transportation in King County.

**Interactive Transportation Knowledge Quiz**
* After looking through our resources, users can take our knowledge quiz to test what they've learned.
* After clicking submit, they'll see a pie chart indicating what percent they got correct, the right answers, and links to learn more.  

## Modes of Transportation Included in Carbon Emissions Calculator
* Walking
* Biking
* Bus
* Car
* Carpool
* Electric Lightrail
* Train (Diesel)
* Plane

## User Personas
View our user personas here: https://drive.google.com/file/d/1Toz8Tbt1K45uOd2hNt1QswbnrTUZuDaJ/view?usp=drive_link

## Development Instructions

### Built with
* HTML
* CSS
* Javascript
* React
* Bootstrap

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
Bergerson, E. (2020, January 8). Seattle Traffic Report gives an in-depth look at 2018 travel trends. SDOT Blog. https://sdotblog.seattle.gov/2019/12/31/seattle-traffic-report-gives-an-in-depth-look-at-2018-travel-trends/#:~:text=On%20average%2C%20people%20took%20about,trips%20were%20on%20surface%20streets  

Environmental Protection Agency. (2023). Greenhouse Gas Emissions From A Typical Passenger Vehicle. https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#typical-passenger  

Environmental Protection Agency. (2023). Sources of Greenhouse Gas Emissions. https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#transportation  

Hovenkotter, K. (2023, March 17). 2022 Seattle Commute Survey Results. Commute Seattle. https://www.commuteseattle.com/2022survey/  

Levin, M. (2022, September 1). Seattle was a transit success story before COVID. how’s it doing now? Marketplace. https://www.marketplace.org/2022/09/01/seattle-was-a-transit-success-story-before-covid-hows-it-doing-now/  

Lloyd, S. A. (2017, September 21). How do Seattle commutes happen?. Curbed Seattle. https://seattle.curbed.com/2017/9/21/16346824/seattle-commute-data-bus-drive  

United Nations Sustainable Development (2023). Climate Change. United Nations Sustainable Development. https://www.un.org/sustainabledevelopment/climate-change/   

University of California (2017). Where do greenhouse gas emissions come from?. University of California. https://www.universityofcalifornia.edu/news/where-do-greenhouse-gas-emissions-come 

