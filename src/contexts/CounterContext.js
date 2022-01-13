import React,{useState, useContext, createContext} from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const value = {
    count,
    increaseCount,
    decreaseCount,
  };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
