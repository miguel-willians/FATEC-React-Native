import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  switchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255,255,255,0.8)' 
  },
  switchBlock: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  quoteContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    flex: 1, 
    justifyContent: 'center',
    marginBottom: 20,
  },
  author: {
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'right',
  }
});