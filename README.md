# React Native TypeError: Cannot read properties of null (reading 'name')

This repository demonstrates a common React Native error: `TypeError: Cannot read properties of undefined (reading 'name')` and provides a solution.

The bug occurs when attempting to access a property of an object that is null or undefined. This often happens when dealing with asynchronous operations like API calls where the data might not be immediately available. 

The solution involves adding appropriate null checks before accessing the property.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app on your emulator or device. 
4. Observe the error in the console.
5. Compare the solution provided.