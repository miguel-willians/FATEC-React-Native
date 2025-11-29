import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  // Estilo para a caixa que envolve o Picker (para dar a borda)
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    height: 55,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 55,
  },
  button: {
    backgroundColor: '#2ecc71',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#27ae60',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Área do Resultado
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderStyle: 'dashed' // Borda tracejada para destacar
  },
  resultLabel: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2980b9',
  }
});