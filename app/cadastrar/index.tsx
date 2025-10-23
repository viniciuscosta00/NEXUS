import { router } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastrar() {
    const handleSelect = (role: string) => {
        // Aqui você pode navegar para outra tela
        // ou salvar o papel do usuário
        console.log(`Selecionou: ${role}`);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.cadastrar}>Cadastrar</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#aaa"
            />

                        <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#aaa"
            />


            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/tela_principal')}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

                        <TouchableOpacity>
                <Text style={styles.jtc}
                    onPress={() => router.navigate('/entrar')}>Já tenho uma conta
                </Text>
                
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F2D3F', // azul escuro do fundo
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: -40,
    },
    cadastrar: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 30,
    },
    jtc: {
        color: '#FFFFFF',
        fontSize: 17,
        marginBottom: 40,
        textDecorationLine: 'underline',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '80%',
        justifyContent: 'center',
        marginVertical: 10,
        marginBottom: 50,
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
    },

    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '80%',
        justifyContent: 'center',
        marginVertical: 10,
        marginBottom: 20,
    },

});