import React from 'react';
import {View} from 'react-native';
import Mycounter from './src/components/MyCounter';
import CounterContextProvider from './src/contexts/CounterContext';
// import ComponentA from './src/components/ComponentA';
// import ComponentB from './src/components/ComponentB';

export default function App() {
  // this is called lifting state up and global state
  // const [name, setName] = React.useState('Jack Adam');
  return (
    <CounterContextProvider>
      <View>
        <Mycounter />
      </View>
    </CounterContextProvider>
  );
}
