import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, VirtualizedList, Pressable, FlatList } from 'react-native';
import { CreateButton } from './createbutton';
import { useState } from 'react';

export default function App() {

  const [List, setList] = useState([]);
  
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={require('./assets/favicon.png')}/>
        <CreateButton onCreate={(newval) => setList((value) => [...value, newval])}/>
        <FlatList style={{color: 'white'}}data={List}></FlatList>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: 'black',
  },

  hero:{
    width: "100%",
    alignItems: 'center',
  },
});
