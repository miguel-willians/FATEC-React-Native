import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
  card: {
    backgroundColor: '#fff',
    marginBottom: 25,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  headerFilme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloFilme: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: '70%'
  },
  linkLeiaMais: {
    color: '#44bd32',
    fontWeight: 'bold',
    fontSize: 16,
  },
  capaFilme: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover', 
  },

  tituloDetalhes: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  sinopseBox: {
    borderWidth: 2,
    borderColor: '#44bd32', 
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#f5fff0', 
  },
  sinopseText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24, 
    textAlign: 'justify'
  }
});