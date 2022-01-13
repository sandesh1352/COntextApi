import React from 'react';
import {View, Text} from 'react-native';
import {useCounter} from '../contexts/CounterContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const {count} = useCounter();
  return (
    <View>
      <Text>Component A</Text>
      <Text>Count from Compnent A: {count}</Text>
      <ComponentB />
    </View>
  );
};
export default ComponentA;
