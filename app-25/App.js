import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as páginas
import Home from './components/Home';
import Detalhes from './components/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'App de Filmes',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />

        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{
            title: 'Detalhes do Filme'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}