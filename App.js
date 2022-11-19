import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListaCompras from './src/components/ListaCompras';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ListaCompras />
      </SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'coral',
  },
});
