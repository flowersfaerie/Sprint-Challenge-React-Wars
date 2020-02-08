# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a means of creating smaller javascript components that can then be combined in various ways to create a larger application. This is similiar to the way LESS or SASS utilize various smaller components in order to create a complete CSS file. One of the key components of React is that it introduces JSX in place of writing more complex Pure "vanilla" JS.

1. What does it mean to think in react?

Thinking in react means creating smaller components that perform one single function instead of larger, more complex components that perform numerous functions. The thinking part equates to the fact that it is much each easier to debug a single small component that performs a single function than it is to parse through thousands of lines of code to find the tiny error that may be hidden in any number of different functions.

1. Describe state.

State is essentially a snapshot of what the page currently looks like so that React is able to see if any changes have been made since the last snapshot.

1. Describe props.

Props are the child version of the parent's state.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything affects something outside the scope of a function being currently executed. These are synced using the useEffect expression which allow the component to render everything first before the side effect is executed.
