import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen from './components/TabScreen/index';
import { View, StatusBar, Platform } from 'react-native';

const Tab = createMaterialTopTabNavigator();



const PessoalScreen = () => (
  <TabScreen 
    title="Dados Pessoais" 
    content="Nome, contato, endereço e informações básicas de identificação." 
  />
);

const FormacaoScreen = () => (
  <TabScreen 
    title="Formação Acadêmica" 
    content="Cursos, faculdades, certificações e histórico educacional." 
  />
);

const ExperienciaScreen = () => (
  <TabScreen 
    title="Experiência Profissional" 
    content="Histórico de empregos, cargos e principais realizações na carreira." 
  />
);


const App = () => {
  return (
    <NavigationContainer>

      <View>
        <Tab.Navigator
          initialRouteName="Pessoal"
          screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: '#007bff', // Cor do texto ativo
            tabBarInactiveTintColor: '#888', // Cor do texto inativo
            tabBarIndicatorStyle: {
              backgroundColor: '#007bff', 
              height: 3,
            },
            tabBarLabelStyle: { 
              fontWeight: 'bold',
              fontSize: 12,
            },
            tabBarStyle: { 
              backgroundColor: '#fff',
              paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
            },
          }}
        >
          <Tab.Screen 
            name="Pessoal" 
            component={PessoalScreen}
            options={{ title: 'PESSOAL' }} // Título exibido na aba
          />
          <Tab.Screen 
            name="Formacao" 
            component={FormacaoScreen}
            options={{ title: 'FORMAÇÃO' }}
          />
          <Tab.Screen 
            name="Experiencia" 
            component={ExperienciaScreen}
            options={{ title: 'EXPERIÊNCIA' }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;