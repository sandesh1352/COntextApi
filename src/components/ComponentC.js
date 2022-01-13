import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const ComponentC = ({name}) => {
  return (
    <SafeAreaView>
      <Text>Component C: {name}</Text>
    </SafeAreaView>
  );
};
export default ComponentC;
