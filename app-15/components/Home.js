import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Home = ({ navigation }) => {
  const vagas = [
    {
      id: '1',
      titulo: 'Desenvolvedor Backend',
      salario: 'R$ 3.000,00',
      descricao: 'Atuar com NodeJS e Express em APIs RESTful.',
      contato: 'rh@tech.com'
    },
    {
      id: '2',
      titulo: 'Engenheiro de Dados',
      salario: 'R$ 5.500,00',
      descricao: 'Conhecimento em Python, Spark e AWS.',
      contato: 'dados@tech.com'
    },
    {
      id: '3',
      titulo: 'Desenvolvedor Frontend',
      salario: 'R$ 4.000,00',
      descricao: 'Experiência com React Native e CSS avançado.',
      contato: 'front@tech.com'
    },
    {
      id: '4',
      titulo: 'Analista de QA',
      salario: 'R$ 3.500,00',
      descricao: 'Testes automatizados com Cypress e Jest.',
      contato: 'qa@tech.com'
    },
    {
      id: '5',
      titulo: 'DevOps Engineer',
      salario: 'R$ 6.000,00',
      descricao: 'Docker, Kubernetes e CI/CD Pipelines.',
      contato: 'infra@tech.com'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Vagas</Text>

      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.jobTitle}>{item.titulo}</Text>
            
            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => navigation.navigate('Detalhes', { vaga: item })}
            >
              <Text style={styles.linkText}>Saiba mais</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;