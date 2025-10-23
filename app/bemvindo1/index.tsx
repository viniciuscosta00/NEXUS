import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Bemvindo() {
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

            <Text style={styles.bemvindo}>Bem-vindo a</Text>
            <Text style={styles.nexus}>NEXUS</Text>

            <Text style={styles.subtitlo}>Você é:</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/entrar_cadastrarADM')}
            >
                <Text style={styles.buttonText}>Administrador</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/entrar_cadastrar')}
            >
                <Text style={styles.buttonText}>Docente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F2D3F',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: -40,
    },
    bemvindo: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 4,
    },
    nexus: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    subtitlo: {
        color: '#FFFFFF',
        fontSize: 20,
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