import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello World From React!'
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// so now how we can create nested elements like
{
  /* <div id="parent">
    <div id="child">
        <h1>i'm h1 tag</h1>
    </div>
</div> */
}
// this reactelement is object => html(browser understands)
// const nestedElem = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement(
//     'div',
//     { id: 'child' },
//     React.createElement('h1', {}, "I'm h1 tag")
//   )
// );
// root.render(nestedElem);

// if we want sibling element then we need to give children as an Array e.g
const nestedElem1 = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is From Namaste React'),
    React.createElement('h2', {}, "I'm h2 tag"),
  ])
);
root.render(nestedElem1);
