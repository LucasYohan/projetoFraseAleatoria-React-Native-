import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        verticalAlign: 'top'
    },

    foto: {
        width: 150,
        height: 150,
        borderRadius: 30,
        alignSelf: 'center',
        objectFit: 'cover'
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        resizeMode: 'cover',
        marginTop: 65
    },

    frase: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center'
    },

    autor: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },

    botao: {
        backgroundColor: 'grey',
        color: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;