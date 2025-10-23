import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function EntrarCadastrar() {
    const handleSelect = (role: string) => {
        // Aqui você pode navegar para outra tela
        // ou salvar o papel do usuário
        console.log(`Selecionou: ${role}`);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoNexus.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/entrar')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/cadastrar')}
            >
                <Text style={styles.buttonText}>Cadastre-se</Text>
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
        marginBottom: 16,
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
        marginBottom: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
    },
});