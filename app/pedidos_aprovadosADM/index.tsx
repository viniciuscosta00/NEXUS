import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type dias = {
    id: string;
    nome: string;

};



export default function TelaProdutos() {
    const [busca, setbusca] = useState('');

    const dias: dias[] = [

        { id: '1', nome: 'Últimos 7 dias' },
        { id: '2', nome: 'Últimos 30 dias' },
        { id: '3', nome: 'Últimos 60 dias' },
    ];

    return (
        <ScrollView style={styles.dias}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.voltarButton} onPress={() => router.navigate('/tela_principalADM')}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.perfilButton}>
                        <Ionicons name="person" size={20} color="#000" />
                        <Text style={styles.perfilText}>Adiministrador</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.adm}>ADM</Text>
                
            </View>


            <View style={styles.titleContainer}>
                <Ionicons name="person-outline" size={80} color="#fff" />
                <Text style={styles.title}>Meus pedidos</Text>


            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#999"
                    value={busca}
                    onChangeText={setbusca}
                />
            </View>

            <View style={styles.diasContainer}>
                {dias.map((cat) => (
                    <TouchableOpacity key={cat.id} style={styles.diasItem} activeOpacity={0.7}>
                        <Text style={styles.diasNome}>{cat.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.pedidos}>Você não tem pedidos recentes</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    voltarButton: {
        marginRight: 10,
        borderRadius: 20,
        padding: 8,
    },
    dias: {
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
        fontWeight: 'bold'
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
    diasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
        marginLeft: -25,
    },
    diasItem: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 60,
        minHeight: 40,
        paddingVertical: 8,
        paddingHorizontal: 0,
        marginLeft: 10.5,
    },
    diasNome: {
        color: '#0F2D3F',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 15,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    pedidos:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    adm: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Arial'
    },
});



