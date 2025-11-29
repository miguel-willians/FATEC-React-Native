import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    height: 350, 
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 180,
    height: 180,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3498db',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  detailImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  detailDescription: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#666',
  }
});