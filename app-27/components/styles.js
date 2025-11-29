import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo Dark
    padding: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  // Área do Formulário (Topo)
  formContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  input: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  btnSalvar: {
    backgroundColor: '#2ecc71', // Verde (POST/PUT)
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Lista de Tarefas
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#3498db', // Detalhe azul lateral
  },
  taskText: {
    color: '#fff',
    fontSize: 16,
    flex: 1, // Ocupa espaço disponível
  },
  actions: {
    flexDirection: 'row',
    gap: 15, // Espaço entre ícones
  },
  loader: {
    marginTop: 50,
  }
});