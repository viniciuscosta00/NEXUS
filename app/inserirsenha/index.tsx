import { router } from 'expo-router';
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function InserirSenha() {
    const [senha, setSenha] = useState("");
    const [senhaRepetida, setSenhaRepetida] = useState("");

    const enviarLink = () => {
        if (!senha.trim() || !senhaRepetida.trim()) {
            Alert.alert("Erro", "Preencha os dois campos de senha.");
            return;
        }
        if (senha !== senhaRepetida) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }
        Alert.alert("Sucesso", "Senha redefinida com sucesso!");
    };
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logoNexus.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Recuperar senha</Text>
            <Text style={styles.subtitle}>
                Insira sua nova senha abaixo.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nova senha"
                placeholderTextColor="#aaa"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Repita a senha"
                placeholderTextColor="#aaa"
                value={senhaRepetida}
                onChangeText={setSenhaRepetida}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/senhared')}>
                <Text style={styles.buttonText}>Redefinir senha</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#032b3f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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