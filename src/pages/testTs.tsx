import React, { useState, useCallback, useMemo } from "react";
import styled from 'styled-components';

//PROPS

// interface Props {
//   name: string;
//   age: number;
// }

// function MyComponent(props: Props) {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// STATE
// interface MyComponentProps {
//     initialCount: number;
// }

// const MyComponent: React.FC<MyComponentProps> = ({initialCount}) => {
//     const [count, setCount] = useState(initialCount);
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// }

//UseCallback, UseMemo

// interface Props {
//     items: string[],
//     onClick: (item: string) => void;
// }

// const MyComponent = (props: Props) => {
//     const handleClick = useCallback((item: string) => {
//         props.onClick(item);
//     }, [props.onClick]);

//     const memoziedValue = useMemo(() => {
//         return props.items.length > 0 ? props.items[0] : '';
//     }, [props.items]);

//     return (
//         <div>
//             <button onClick={() => handleClick(memoziedValue)}>Click me</button>
//         </div>
//     )
// }

//UseState
interface State {
  count: number;
}

const Button = styled.button`
    background-color: blue;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
    }
`

const MyComponent = () => {
  const [state, setState] = useState<State>({ count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
       <Button onClick={() => setState({count: state.count  +1})}>Increment</Button>
    </div>
  );
};

export default MyComponent;
