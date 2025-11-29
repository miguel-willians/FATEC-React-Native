import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TarefasAPI from './components/TarefasAPI';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Mudei o background do SafeArea para combinar com o Dark Mode */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <TarefasAPI />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}