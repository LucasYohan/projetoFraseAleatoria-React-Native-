import { SafeAreaView, Image } from 'react-native';
import ViewFrases from './components/ViewFrases';
import ViewFrasesUE from './components/ViewFrasesUE';
import styles from './components/Styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo}
       source={require('./assets/galeria.jpg')}></Image>
      <ViewFrasesUE/>

    </SafeAreaView>
  );
};