import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonActive: {
    backgroundColor: '#e6f7ff', 
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#888',
  },
  tabTextActive: {
    fontWeight: 'bold',
    color: '#007bff', 
  },
  tabIcon: {
    fontSize: 18,
  },
});

export default styles;