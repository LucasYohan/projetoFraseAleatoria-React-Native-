import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { frases } from './Frases';
import styles from './Styles';

export default function ViewFrasesUE() {

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

    // useEffect(() => {
    //     geradorFrasesAleatorio();
    // });

    useEffect(() => {
        const timer = setTimeout(() => {
            geradorFrasesAleatorio();
        }, 2000)

        return () => clearTimeout(timer);
    }, [frasesIndex]
)

    return (
        <View style={styles.container}>
            <MostraFoto caminho={frases[frasesIndex].foto}></MostraFoto>
            <Text style={styles.frase}>
                "{frases[frasesIndex].frase}"
            </Text>
            <Text style={styles.autor}>
                "{frases[frasesIndex].autor}"
            </Text>
        </View>
    )
}