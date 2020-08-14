1. What problem does the context API help solve?
Context API makes passing state / props between components possible without props drilling or the boilerplate of redux 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions, reducers, and the store are all part of Redux' 1-way data flow. The store is where application state is held -- it's positioned outside of all components to make them universally accessible and provide a single, immutable source of truth. Actions are dispensed by the way that a user interacts with your website, and provide instructions on how to manipulate application state. Reducers take  instructions from actions and, passing them through a switch case, enacts predictable rules on incoming data to produce the new and updated version of app state.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is information that is relevant to the entire program, whereas component state informs individual pieces of the application. App state is a good place to catch and display error messages, load and post data to/from an external API, and store user information. Component state would be used in the case of things like modals isOpen, handling changes for form data, etc.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk provides functionality to implement middleware on a redux app. It can stop, duplicate, or otherwise change the actions that are being sent to a reducer. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like context API because it's cheap and easy. It makes state-sharing less of a hassle and makes spinning up small React projects easier.