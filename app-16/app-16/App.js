import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen from './components/TabScreen/index';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Pessoal: '👤',
  Formacao: '🎓',
  Experiencia: '💼',
};

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


const AppPerfil = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pessoal"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color: color }}>
              {TAB_ICONS[route.name]}
            </Text>
          ),
          tabBarActiveTintColor: '#007bff', 
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { 
            height: 60,
            paddingBottom: 5,
          },
          headerShown: false, 
        })}
      >
        <Tab.Screen 
          name="Pessoal" 
          component={PessoalScreen}
          options={{ title: 'Pessoal' }} 
        />
        <Tab.Screen 
          name="Formacao" 
          component={FormacaoScreen}
          options={{ title: 'Formação' }}
        />
        <Tab.Screen 
          name="Experiencia" 
          component={ExperienciaScreen}
          options={{ title: 'Experiência' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppPerfil;