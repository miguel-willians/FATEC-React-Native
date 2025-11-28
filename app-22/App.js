import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Importa o componente que criamos
import Tarefas from './components/ListaDeCompras';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle="dark-content" />
        <Tarefas />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}