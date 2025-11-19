import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#333',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  pickerButton: { 
    height: 40,
    width: 40,
    marginLeft: 5,
    backgroundColor: '#007bff', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  pickerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;