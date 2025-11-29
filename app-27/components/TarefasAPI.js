import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, ActivityIndicator, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './styles';

const API_URL = 'https://tarefa-backend.onrender.com/tasks';

const TarefasAPI = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskText, setTaskText] = useState('');
  const [editingId, setEditingId] = useState(null); // Null = Modo Criação, ID = Modo Edição

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!taskText.trim()) return Alert.alert('Atenção', 'Digite uma tarefa!');

    try {
      setLoading(true);

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, {
          name: taskText 
        });
        Alert.alert('Sucesso', 'Tarefa atualizada!');
        setEditingId(null);
      } else {
        await axios.post(API_URL, {
          name: taskText 
        });
      }

      setTaskText('');
      Keyboard.dismiss();
      getTasks();
      
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao salvar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Alert.alert(
      'Excluir',
      'Tem certeza que deseja apagar?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sim', 
          onPress: async () => {
            try {
              setLoading(true);
              await axios.delete(`${API_URL}/${id}`);
              getTasks(); // Atualiza lista
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir.');
            } finally {
              setLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleEdit = (item) => {
    setTaskText(item.name);
    setEditingId(item.id); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>#App 27 - API Tasks</Text>

      {/* Formulário de Cadastro/Edição */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa..."
          placeholderTextColor="#999"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity 
          style={[styles.btnSalvar, { backgroundColor: editingId ? '#f39c12' : '#2ecc71' }]} 
          onPress={handleSave}
        >
          <Text style={styles.btnText}>
            {editingId ? 'ATUALIZAR (PUT)' : 'CADASTRAR (POST)'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.taskText}>{item.name}</Text>
              
              <View style={styles.actions}>
                {/* Botão Editar */}
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <Ionicons name="pencil" size={24} color="#f39c12" />
                </TouchableOpacity>

                {/* Botão Excluir */}
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Ionicons name="trash" size={24} color="#e74c3c" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default TarefasAPI;