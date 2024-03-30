import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FabButton from './src/componentes/FabButton';
export default function App() {
  return (
    <View style={styles.container}>
    <FabButton
    style={{bottom:80,right: 60}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
