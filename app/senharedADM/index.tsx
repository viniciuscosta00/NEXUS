import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecuperarSenha() {

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="check" size={90} color="white" style={styles.icon} />
            <Text style={styles.title}>Senha redefinida com sucesso!</Text>


            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/entrarADM')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032b3f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    icon: {
        color: 'white',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 20,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: '100%',
    },
    buttonText: {
        color: '#032b3f',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        color: '#fff',
        marginTop: 90,
        textDecorationLine: 'underline',
    },
});