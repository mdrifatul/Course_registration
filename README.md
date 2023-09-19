# Three features in this website

    1. When user select any course, course name will be show in sidebar Course Name area. If the user wants to select the same course again it will give a alert.

    2. User can select any course but there have a conditation, when total credit hours become 20 hours user can not select more courses.

    3. If user select any course that specific course credit hours will be minus from remaining credit hours. limit of remaining credit is 20 hours.

# Manage use State

    1.  At first I imported useState hook from react.
    2. Then i have declared a useState inside a function from where I managed the state.
    3. State return a array with two elements, card and setCard.
    4. Then I used useEffect hook for fatching data and after receiving the data I set data into setCard.
    5. Then I run a loop over the card to get tha data and pass a parameter
    6. I used this parameter as prop to find every specific value.
    That's a manage use state
