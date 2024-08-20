import React, { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Notification from './components/Notification';
import useNotification from './components/hooks/useNotification';
import FetchPost from './components/sum';
import FormValidation from './components/formValidation';
import Child from './components/Child';

const App = () => {
  const [inputs, setInputs] = useState({});
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const result = useMemo(() => {
    let i = 0;
    console.time('result');
    while (i < 10000) {
      i++;
    }
    console.timeEnd('result');
    return 90;
  }, []);

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const { notificationComponent, triggerNotification } =
    useNotification('top-left');

  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={inputs.name || ' '}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={inputs.age || ' '}
          onChange={inputHandler}
        />
        <select name="car" onChange={inputHandler}>
          <option value="forsw">volvo</option>
          <option value="ford">ford</option>
          <option value="hyundai">hyundai</option>
        </select>
        <input type="submit" />
      </form> */}

      <button
        onClick={() =>
          triggerNotification({
            type: 'success',
            message: 'File Created successfully',
            duration: 3000,
          })
        }
      >
        Success Toaster
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: 'error',
            message: 'File Deleted successfully',
            duration: 3000,
          })
        }
      >
        Error Toaster
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: 'info',
            message: 'File Read successfully',
            duration: 3000,
          })
        }
      >
        Info Toaster
      </button>
      {notificationComponent}
      {/* <Notification
          type="info"
          message="File Created Successfully"
          onClick={() => {}}
        /> */}
      {/* <FetchPost /> */}
      <FormValidation />
      <h1>
        Performance optimization in react js. {count} result is {result}
      </h1>
      <Child incrementCount={incrementCount} />
    </>
  );
};

export default App;

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello World From React!'
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

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
// const nestedElem1 = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {}, 'This is From Namaste React'),
//     React.createElement('h2', {}, "I'm h2 tag"),
//   ])
// );
// root.render(nestedElem1);
