import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Frases from './components/Frases';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Frases />
    </SafeAreaView>
  );
}