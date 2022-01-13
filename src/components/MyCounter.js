import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useCounter} from '../contexts/CounterContext';
import ComponentA from './ComponentA';

const Mycounter = () => {
  const {count, increaseCount, decreaseCount} = useCounter();
  return (
    <SafeAreaView >
      
      <Text>Counter Component</Text>
      <Text>Count is: {count}</Text>
      <Button title="Increment" onPress={increaseCount} />
      <Button title="Decrement" onPress={decreaseCount} />
      <ComponentA />
    </SafeAreaView>
  );
};
export default Mycounter;
