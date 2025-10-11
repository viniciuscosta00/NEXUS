import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
                <TouchableOpacity style={styles.voltarButton} onPress={() => router.navigate('/tela_principal')}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.perfilButton}>
                        <Ionicons name="person-outline" size={20} color="#000" />
                        <Text style={styles.perfilText}>Docente</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
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

            <TouchableOpacity style={styles.pedidosContainer}>
                <Image source={require('@/assets/images/resma.png')} style={styles.produtoimg} resizeMode="contain" />
                <View style={styles.pedidoInfo}>
                    <Text style={styles.pedidoNome}>Resma folha A4(Report)</Text>
                    <View style={styles.quantidadeBox}>
                        <Text style={styles.quantidadeText}>Quantidade: <Text style={styles.quantidadeValor}>15</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pedidosContainer}>
                <Image source={require('@/assets/images/pano.png')} style={styles.produtoimg} resizeMode="contain" />
                    <View style={styles.pedidoInfo}>
                    <Text style={styles.pedidoNome}>Kit 6 Flanelas,Laranja - 28cm x 38cm</Text>
                    <View style={styles.quantidadeBox}>
                        <Text style={styles.quantidadeText}>Quantidade: <Text style={styles.quantidadeValor}>15</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pedidosContainer}>
                <Image source={require('@/assets/images/pendrive.png')} style={styles.produtoimg} resizeMode="contain" />
                <View style={styles.pedidoInfo}>
                    <Text style={styles.pedidoNome}>Pen Drive SanDisk, 64GB</Text>
                    <View style={styles.quantidadeBox}>
                        <Text style={styles.quantidadeText}>Quantidade: <Text style={styles.quantidadeValor}>15</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pedidosContainer}>
                <Image source={require('@/assets/images/mouse.png')} style={styles.produtoimg} resizeMode="contain" />
                <View style={styles.pedidoInfo}>
                    <Text style={styles.pedidoNome}>Mouse USB 12000dpi(Multilaser)</Text>
                    <View style={styles.quantidadeBox}>
                        <Text style={styles.quantidadeText}>Quantidade: <Text style={styles.quantidadeValor}>15</Text></Text>
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
    diasTitulo: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
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
    pedidosContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    produtoimg: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    pedidoInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    pedidoNome: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 8,
    },
    quantidadeBox: {
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
        alignSelf: 'flex-start',
        paddingHorizontal: 18,
        paddingVertical: 2,
    },
    quantidadeText: {
        fontSize: 13,
        fontWeight: '400',
    },
    quantidadeValor: {
        fontWeight: 'bold',
    },
});



