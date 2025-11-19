import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './pages/Form/index';
import Result from './pages/Result/index';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
