// D:\React\calculator\app.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import Calculator from './CalculatorApp/Calculator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
