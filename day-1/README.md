Day-1 React learning

Q1.Why i chose learn react?

Q2.Why react?

Q3. Where does React put all of the elements I create in JSX when I call root.render()?

Ans: React places those element into the DOM node.

Q4. What would show up in my console if I were to run this line of code:

console.log(<h1>Hello world!</h1>)
Ans:its shows react object element not html.
ex:{
type:"h1"
props:{
children: "Hello World!"
},
..
}

Q5. What's wrong with this code:
root.render(

<h1>Hi there</h1>
<p>This is my website!</p>
)
Ans: its cant return multiple jsx element side by side buts its can use div or <> </>
Q6. What does it mean for something to be "declarative" instead of "imperative"?
Ans: Declarative->Describe what we want ,react can handel how to do it
   Imperative->i tell the browser how to do it manually.

React is declarative, I tell ui how should looks like,its handel dom

Q7. What does it mean for something to be "composable"?
its mean we can create complex ui using reusable code.
