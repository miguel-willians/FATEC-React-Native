import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, Modal, TextInput, Keyboard 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const Tarefas = () => {
  const [lista, setLista] = useState([]); // Armazena as tarefas
  const [modalVisible, setModalVisible] = useState(false); // Abre/fecha modal
  const [novaTarefa, setNovaTarefa] = useState(''); // Texto do input
  const [idEdicao, setIdEdicao] = useState(null); // ID da tarefa sendo editada (se houver)

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem('minhasTarefas');
      if (valor !== null) {
        setLista(JSON.parse(valor));
      }
    } catch (e) {
      alert('Erro ao carregar tarefas');
    }
  };

  const salvarTarefa = async () => {
    if (novaTarefa.trim() === '') {
      alert('Digite o nome da tarefa!');
      return;
    }

    let novaLista = [...lista];

    if (idEdicao !== null) {
      const index = novaLista.findIndex(item => item.id === idEdicao);
      novaLista[index].nome = novaTarefa;
    } else {
      const item = {
        id: Date.now().toString(),
        nome: novaTarefa
      };
      novaLista.push(item);
    }

    setLista(novaLista);
    await AsyncStorage.setItem('minhasTarefas', JSON.stringify(novaLista)); 
    
    setNovaTarefa('');
    setIdEdicao(null);
    setModalVisible(false);
    Keyboard.dismiss();
  };

  const excluirTarefa = async (id) => {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
    await AsyncStorage.setItem('minhasTarefas', JSON.stringify(novaLista));
  };

  const abrirEdicao = (item) => {
    setNovaTarefa(item.nome);
    setIdEdicao(item.id);
    setModalVisible(true);
  };

  const abrirNovo = () => {
    setNovaTarefa('');
    setIdEdicao(null);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

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
              <TouchableOpacity onPress={() => excluirTarefa(item.id)} style={styles.actionButton}>
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
              {idEdicao ? 'Editar Tarefa' : 'Nova Tarefa'}
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nome da Tarefa"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
                <Text style={[styles.txtBtn, { color: 'red' }]}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnSalvar} onPress={salvarTarefa}>
                <Text style={[styles.txtBtn, { color: 'blue' }]}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Tarefas;