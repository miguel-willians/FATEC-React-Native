import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilos do Container Principal (usado em index.js)
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9534F', 
    marginBottom: 20,
    textAlign: 'center',
  },
  


  // Estilos do Botão e Resultado (usado em index.js)
  convertButton: {
    backgroundColor: '#5CB85C', 
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#E6FFE6', 
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  resultLabel: {
    fontSize: 18,
    color: '#4CAF50', 
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    fontWeight: '700',
  },
  errorText: {
    fontSize: 16,
    color: '#D9534F', 
    textAlign: 'center',
    marginTop: 10,
  }
});

export default styles;