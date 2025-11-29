import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Home = ({ navigation }) => {
  const produtos = [
    {
      id: 1,
      nome: 'Tênis Esportivo',
      imagem: 'https://img.freepik.com/fotos-gratis/sapatos-esportivos-elegantes-em-fundo-branco-isolado_1203-7893.jpg',
      descricao: 'Este tênis esportivo oferece o máximo conforto para suas corridas e treinos diários. Possui tecnologia de amortecimento avançada.'
    },
    {
      id: 2,
      nome: 'Relógio Smart',
      imagem: 'https://img.freepik.com/fotos-gratis/relogio-inteligente-preto-com-alca-isolada-no-fundo-branco_1101-1875.jpg',
      descricao: 'Monitore sua saúde e notificações com este Smartwatch de última geração. Resistente à água e com bateria de longa duração.'
    },
    {
      id: 3,
      nome: 'Fones Bluetooth',
      imagem: 'https://img.freepik.com/fotos-gratis/fone-de-ouvido-sem-fio-levitando_23-2148735552.jpg',
      descricao: 'Qualidade de som cristalina e cancelamento de ruído. Perfeito para viagens e concentração no trabalho.'
    },
    {
      id: 4,
      nome: 'Mochila Notebook',
      imagem: 'https://img.freepik.com/fotos-gratis/mochila-azul-isolada-no-fundo-branco_125540-976.jpg',
      descricao: 'Mochila resistente e espaçosa, ideal para carregar notebooks de até 15 polegadas com segurança e estilo.'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>

      <View style={{ height: 320 }}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {produtos.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.nome}</Text>
              
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Detalhes', { produto: item })}
              >
                <Text style={styles.buttonText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;