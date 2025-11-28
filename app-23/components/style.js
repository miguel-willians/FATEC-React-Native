import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color: '#333'
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    width: 60,
    height: 50,
    backgroundColor: '#95afc0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    backgroundColor: '#f1f2f6',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#2d3436',
  },
  label: {
    fontWeight: 'bold',
  }
});