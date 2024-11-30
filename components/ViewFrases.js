import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { frases } from './Frases';
import styles from './Styles';


export default function ViewFrases() {

    const [frasesIndex, setFrasesIndex] = useState(0);

    const MostraFoto = ({ caminho }) => (
        <Image source={caminho} style={styles.foto} />
    );

    const sorteioAleatorioIndex = () => {
        return Math.floor(Math.random() * frases.length);
    }

    const geradorFrasesAleatorio = () => {
        setFrasesIndex(sorteioAleatorioIndex());
    }

    return (
        <View style={styles.container}>
            <MostraFoto caminho={frases[frasesIndex].foto}></MostraFoto>
            <Text style={styles.frase}>
                "{frases[frasesIndex].frase}"
            </Text>
            <Text style={styles.autor}>
                "{frases[frasesIndex].autor}"
            </Text>
            <View style={styles.botao}>
                <TouchableOpacity style={styles.button} onPress={geradorFrasesAleatorio} >
                    <Text>
                        Gerar outra frase
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}