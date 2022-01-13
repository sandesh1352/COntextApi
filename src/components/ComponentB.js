// import React from 'react';
// import {View,Text} from 'react-native'
// import ComponentA from './ComponentA';
// import ComponentC from './ComponentC';

// const ComponentB = ({name}) => {

//     const [name, setName] = React.useState('Jack Adam');
//     // this is what call props drilling
//     return (
//         <View>
//             <Text>Component B</Text>
//             <Text>name is: {name}</Text>
//             <ComponentC name={name}/>
//             <ComponentA name={name}/>
//         </View>
//     )
// }
// export default ComponentB;

import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useCounter} from '../contexts/CounterContext';

const ComponentB = () => {
  const {increaseCount} = useCounter();
  return (
    <SafeAreaView>
      <Text>Component B</Text>
      <Button title="increase count" onPress={increaseCount}/>
    </SafeAreaView>
  );
};
export default ComponentB;
