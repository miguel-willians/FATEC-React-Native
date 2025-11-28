import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    flex: 1, 
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 15,
  },
  floatButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    marginBottom: 20,
    paddingVertical: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCancelar: {
    padding: 10,
  },
  btnSalvar: {
    padding: 10,
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});