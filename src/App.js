import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './components/StoreCard';
import store_items from './store_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_text}>PATIKA STORE</Text>
      </View>
      <View>
        <TextInput style={styles.search_container} placeholder="Ara..." />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={store_items}
        renderItem={({item}) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wtihe',
    margin: 10,
  },
  header_text: {
    color: 'purple',
    fontSize: 40,
    fontWeight:"bold",
  },
  search_container: {
    backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 20,
  },
});

export default App;