import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function TelaProdutos() {
    const [busca, setbusca] = useState('');


    return (
        <ScrollView style={styles.categoria}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.voltarButton} onPress={() => router.navigate('/solicitar')}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
            </View>


            <View style={styles.titleContainer}>
                <Text style={styles.title}>Não encontrou o</Text>
                <Text style={styles.title}>que procura?</Text>
            </View>

            <View style={styles.titleContainer2}>
                <Text style={styles.title2}>Solicite itens que não estão disponíveis no estoque?</Text>
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
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btnForaEstoqueContainer: {
        flexDirection: 'row',
    },
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

    logo: {
        width: 90,
        height: 90,
        marginRight: -30,
    },

    titleContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    titleContainer2: {
        alignItems: 'center',
        marginVertical: 10,
    },

    title: {
        color: '#fff',
        fontSize: 28,
        marginTop: 10,
    },
    title2: {
        color: '#fff',
        fontSize: 17,
        marginTop: 60,
        textAlign: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f3f3ff',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 125,
        marginBottom: 25,
    },
    searchIcon: {
        marginRight: 8,
        marginTop: -170,
    },
    searchInput: {
        marginTop: -170,
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});



