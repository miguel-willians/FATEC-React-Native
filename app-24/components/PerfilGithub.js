import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './styles';

const PerfilGithub = () => {
  const [user, setUser] = useState('');
  const [perfil, setPerfil] = useState(null); 

  const buscarPerfil = async () => {
    if (user.trim() === '') {
      Alert.alert('Erro', 'Digite um usuário do GitHub!');
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setPerfil(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
      Alert.alert('Ops!', 'Usuário não encontrado.');
      setPerfil(null); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil dos Devs</Text>

      {/* Imagem do Perfil */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.perfilImage}
          source={{
            uri: perfil 
              ? perfil.avatar_url 
              : 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          }}
        />
      </View>

      {/* Input e Botão */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o login git..."
          value={user}
          onChangeText={setUser}
          autoCapitalize="none" 
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button} onPress={buscarPerfil}>
          <Ionicons name="checkmark" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Detalhes (Renderização Condicional) */}
      {perfil && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Id:</Text> {perfil.id}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Nome:</Text> {perfil.name || 'Sem nome'}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Repositórios:</Text> {perfil.public_repos}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Criado em:</Text> {new Date(perfil.created_at).toLocaleDateString()}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Seguidores:</Text> {perfil.followers}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Seguindo:</Text> {perfil.following}
          </Text>
        </View>
      )}
    </View>
  );
};

export default PerfilGithub;