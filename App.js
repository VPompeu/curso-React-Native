import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, VirtualizedList, Pressable } from 'react-native';
import { CreateButton } from './createbutton';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={require('./assets/favicon.png')}/>
        <CreateButton></CreateButton>
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
