import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  linkButton: {
    alignSelf: 'flex-start',
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'underline',
  },
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  detailHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  }
});