import { Ionicons } from '@expo/vector-icons';
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
            <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity style={styles.perfilButton}>
                    <Ionicons name="person-outline" size={20} color="#000" />
                    <Text style={styles.perfilText}>Docente</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('@/assets/images/logoNexus.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/meus_pedidos')}
            >   <Ionicons name="person-outline" size={30} color="#000" />
                <Text style={styles.buttonText}>Meus pedidos</Text>
            </TouchableOpacity>

                        <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/solicitar')}
            >   <Ionicons name="add-outline" size={30} color="#000" />
                <Text style={styles.buttonText}>Solicitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate('/produtos')}
            >   <Ionicons name="cube-outline" size={30} color="#000" />
                <Text style={styles.buttonText}>Produtos</Text>
            </TouchableOpacity>

            <Image
                source={require('@/assets/images/baner.png')}
                style={styles.banner}
                resizeMode="contain"
            />
        
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0F2D3F',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    perfilButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 40,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },

    banner: {
        height: 250,
        marginBottom: 210,
        marginTop: 20,
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
        marginLeft: 10,
    },

    perfilText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#000',
    },

});