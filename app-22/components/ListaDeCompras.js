import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, Modal, TextInput, Keyboard 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './styles';

const ListaDeCompras = () => {
  const [lista, setLista] = useState([]); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [novoProduto, setNovoProduto] = useState(''); 
  const [idEdicao, setIdEdicao] = useState(null); 

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem('meusProdutos');
      if (valor !== null) {
        setLista(JSON.parse(valor));
      }
    } catch (e) {
      alert('Erro ao carregar produto');
    }
  };

  const salvarProduto = async () => {
    if (novoProduto.trim() === '') {
      alert('Digite o nome do produto!');
      return;
    }

    let novaLista = [...lista];

    if (idEdicao !== null) {
      const index = novaLista.findIndex(item => item.id === idEdicao);
      novaLista[index].nome = novoProduto;
    } else {
      const item = {
        id: Date.now().toString(),
        nome: novoProduto
      };
      novaLista.push(item);
    }

    setLista(novaLista); 
    await AsyncStorage.setItem('meusProdutos', JSON.stringify(novaLista));
    
    setNovoProduto('');
    setIdEdicao(null);
    setModalVisible(false);
    Keyboard.dismiss();
  };

  const excluirProduto = async (id) => {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
    await AsyncStorage.setItem('meusProdutos', JSON.stringify(novaLista));
  };

  const abrirEdicao = (item) => {
    setNovoProduto(item.nome);
    setIdEdicao(item.id);
    setModalVisible(true);
  };

  const abrirNovo = () => {
    setNovoProduto('');
    setIdEdicao(null);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>

      <FlatList
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
            
            <View style={styles.actionsContainer}>
              {/* Botão Editar (Lápis) */}
              <TouchableOpacity onPress={() => abrirEdicao(item)} style={styles.actionButton}>
                <Ionicons name="pencil" size={24} color="#444" />
              </TouchableOpacity>

              {/* Botão Excluir (Menos/Lixeira) */}
              <TouchableOpacity onPress={() => excluirProduto(item.id)} style={styles.actionButton}>
                <Ionicons name="remove-circle-outline" size={24} color="#d63031" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Botão Flutuante (+) */}
      <TouchableOpacity style={styles.floatButton} onPress={abrirNovo}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Modal de Cadastro/Edição */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              {idEdicao ? 'Editar Produto' : 'Novo Produto'}
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nome do Produto"
              value={novoProduto}
              onChangeText={setNovoProduto}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
                <Text style={[styles.txtBtn, { color: 'red' }]}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnSalvar} onPress={salvarProduto}>
                <Text style={[styles.txtBtn, { color: 'blue' }]}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListaDeCompras;