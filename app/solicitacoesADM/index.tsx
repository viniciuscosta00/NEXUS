import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Categoria = {
    id: string;
    nome: string;

};

export default function TelaProdutos() {
    const [busca, setbusca] = useState('');


    return (
        <ScrollView style={styles.categoria}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.voltarButton} onPress={() => router.navigate('/tela_principal')}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.perfilButton}>
                        <Ionicons name="person-outline" size={20} color="#000" />
                        <Text style={styles.perfilText}>Adiministrador</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.adm}>ADM</Text>
            </View>

            <View style={styles.titleContainer}>
                <Ionicons name="chatbox-outline" size={100} color="#fff" />
            
                <Text style={styles.title}>Mensagens</Text>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar Usuário"
                    placeholderTextColor="#999"
                    value={busca}
                    onChangeText={setbusca}
                />
            </View>

            <Text style={styles.nvmensagem}>Você tem novas mensagens</Text>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Ionicons name="person" size={50} color="#0F2D3F"/>
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Usuário00292</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.mensagem}><Text style={styles.addBtnText}>+4</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

                        <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Ionicons name="person" size={50} color="#0F2D3F"/>
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Usuário0322</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.mensagem}><Text style={styles.addBtnText}>+1</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

                        <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Ionicons name="person" size={50} color="#0F2D3F"/>
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Usuário0321</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.mensagem}><Text style={styles.addBtnText}>+2</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

                                    <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Ionicons name="person" size={50} color="#0F2D3F"/>
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Usuário0321</Text>
                    <View style={styles.quantidadeRow}>
                        
                    </View>
                </View>
            </View>
            </TouchableOpacity>

                                    <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Ionicons name="person" size={50} color="#0F2D3F"/>
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Usuário0321</Text>
                    <View style={styles.quantidadeRow}>
                        
                    </View>
                </View>
            </View>
            </TouchableOpacity>


            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    voltarButton: {
        marginRight: 10,
        borderRadius: 20,
        padding: 8,
    },
    categoria: {
        flex: 1,
        backgroundColor: '#0F2D3F',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    perfilButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
    },
    perfilText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },

    title: {
        color: '#fff',
        fontSize: 28,
        marginTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 25,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },

    produtoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },

    produtoInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    produtoNome: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 8,
        marginLeft: 20,
        color: '#222',
        textDecorationLine: 'underline',
    },
    quantidadeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    mensagem: {
        backgroundColor: '#0F2D3F',
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 2,
        marginLeft: 210,
        marginBottom: 15,
    },
    addBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    adm: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Arial'
    },

    nvmensagem:{
        alignItems: 'center',
        color: '#fff',
        marginLeft: 80,
        marginBottom: 50,
        fontSize: 15,
    },
});



