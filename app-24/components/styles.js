import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    width: '100%',
    textAlign: 'center',
    paddingBottom: 10,
  },
  imageContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  perfilImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 2,
    borderColor: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
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
    fontSize: 16,
  },
  button: {
    width: 60,
    height: 50,
    backgroundColor: '#badc58', 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
  },
  infoContainer: {
    width: '100%',
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: '500',
  },
  label: {
    fontWeight: 'bold',
  }
});