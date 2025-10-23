import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RecuperarSenha() {
    const [email, setEmail] = useState("");

    const enviarLink = () => {
        if (!email.trim()) {
            Alert.alert("Erro", "Por favor, informe um e-mail ou telefone válido.");
            return;
        }
        Alert.alert("Sucesso", `Link para redefinição enviado para ${email}!`);
    };

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="lock" size={90} color="white" style={styles.icon} />
            <Text style={styles.title}>Recuperar senha</Text>
            <Text style={styles.subtitle}>
                Insira seu e-mail ou telefone e enviaremos um link para redefinir a sua senha!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail ou telefone"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/inserirsenha')}>
                <Text style={styles.buttonText}>Enviar Link para Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/cadastrar')}>
                <Text style={styles.link}>Criar outra conta</Text>
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
        backgroundColor: '#0a4d68',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        color: '#fff',
        marginTop: 90,
        textDecorationLine: 'underline',
    },
});