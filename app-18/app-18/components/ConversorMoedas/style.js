import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContent: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  convertButton: {
    width: '100%',
    backgroundColor: '#007bff', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 2, 
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 10,
    width: '100%',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 30,
    color: '#5CB85C',
    fontWeight: '700',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#D9534F',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default styles;