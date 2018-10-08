### Amazee Labs App


For the coding challenge, I've created a React JS App and I've used Redux for the state management.

I decided to use Redux to handle every state in different components because is easier to passing state value through components and also it will be easier to expand the project.

On **componentDidMount** lifecycle, I simulate 2 API call that returns the courseTypes and the courses. 

I've tried to abstract as much as possible:

* Every function does one thing. Because it's easier to expand functionalities and reuse functions, with a structure like this is easier to implement tests.
* to make a course mandatory you just need to change the property **isRequired** inside the object in **fakeApiCallCourseTypes** function.	
* if you change the arrays of objects inside the fake API calls (maintaining the same structure) you'll have a different menu with different courses and course items

## Style
I've used SCSS and BEM as a naming convention, I've created a "variable.scss" and a scss file for every component.

Enjoy :D


## Installation
* Run `cd amazee-labs`
* Run `yarn`.
* Run `yarn start`
