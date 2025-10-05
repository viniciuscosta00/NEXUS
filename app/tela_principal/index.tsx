import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Cadastrar() {
    const handleSelect = (role: string) => {
        // Aqui você pode navegar para outra tela
        // ou salvar o papel do usuário
        console.log(`Selecionou: ${role}`);
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.perfil}
                onPress={() => router.navigate('')}
            >
                <Text style={styles.perfilText}>Docente</Text>
            </TouchableOpacity>

            <Image
                source={require('@/assets/images/logoNexus.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('')}
            >
                <Text style={styles.buttonText}>Meus pedidos</Text>
            </TouchableOpacity>

                        <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('')}
            >
                <Text style={styles.buttonText}>Solicitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('')}
            >
                <Text style={styles.buttonText}>Produtos</Text>
            </TouchableOpacity>

            <Image
                source={require('@/assets/images/baner.png')}
                style={styles.baner}
                resizeMode="contain"
            />
        
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
        marginBottom: 5,
    },

    baner: {
        marginTop: -50,
        width: 400,
        height: 400,
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
    },

    button: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 24,
        width: '110%',
        marginVertical: 10,
        marginBottom: -8,
    },

    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        marginRight: 250,
        marginTop: 30,
        paddingVertical: 5,
        width: '30%',
        justifyContent: 'center',


    },
    buttonText: {
        color: '#000',
        fontSize: 20,
    },

    perfilText: {
        color: '#000',
        fontSize: 15,
    },

});