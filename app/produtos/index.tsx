import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Categoria = {
    id: string;
    nome: string;
    
};

type Produto = {
    id: string;
    nome: string;
    imagem: any;
    status: 'Disponível' | 'Baixo estoque' | 'Indisponível';
    
}

export default function TelaProdutos() {
    const [busca, setbusca] = useState('');

    const categorias: Categoria[] = [
        
        { id: '1', nome: 'Informática'},
        { id: '2', nome: 'Limpeza'},
        { id: '3', nome: 'Papelaria'},
    ];

    const produtos: Produto[] = [
        { id: '1', nome: 'Mouse USB Multilaser', imagem: require('@/assets/images/mouse.png'), status: 'Disponível' },
        { id: '2', nome: 'Estabilizador Coletk', imagem: require('@/assets/images/estabilizador.png'), status: 'Indisponível' },
        { id: '3', nome: 'Borrifador Plástico', imagem: require('@/assets/images/borrifador.png'), status: 'Disponível' },
        { id: '4', nome: 'Teclado Multilaser', imagem: require('@/assets/images/teclado.png'), status: 'Baixo estoque' },
        { id: '5', nome: 'Tesoura Ergonômica', imagem: require('@/assets/images/tesoura.png'), status: 'Disponível' },
        { id: '6', nome: 'Headset Blackwire USB', imagem: require('@/assets/images/fone.png'), status: 'Baixo estoque' },
        { id: '7', nome: 'Flanelas,Laranja - 28cm x 38cm', imagem: require('@/assets/images/pano.png'), status: 'Disponível' },
        { id: '8', nome: 'Grampeador Metal 11,5', imagem: require('@/assets/images/grampeador.png'), status: 'Baixo estoque' },
        { id: '9', nome: 'Calculadora Grande 12 Dígitos ', imagem: require('@/assets/images/calculadora.png'), status: 'Disponível' },
        { id: '10', nome: 'Pen Drive Cruzer Blade, SanDisk, 64GB', imagem: require('@/assets/images/pendrive.png'), status: 'Indisponível' },
        { id: '11', nome: 'Resma folha A4(Report)', imagem: require('@/assets/images/resma.png'), status: 'Disponível' },
        { id: '12', nome: 'Escova Multiúso Tradicional', imagem: require('@/assets/images/escova.png'), status: 'Disponível' },
    ];

    const renderProduto = ({ item }: { item: Produto }) => (
        <View style={styles.produtoCard}>
            <Image source={item.imagem} style={styles.produtoImagem} resizeMode="contain" />
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text
                style={[
                    styles.status,
                    item.status === 'Disponível'
                        ? styles.disponivel
                        : item.status === 'Baixo estoque'
                            ? styles.baixoEstoque
                            : styles.indisponivel,
                ]}
            >
                {item.status}
            </Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
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
                <Ionicons name="cube-outline" size={80} color="#fff"/>
                <Text style={styles.title}>Produtos</Text>


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

            <Text style={styles.categoriasTitulo}>Categorias:</Text>

            <View style={styles.categoriasContainer}>
                {categorias.map((cat) => (
                    <TouchableOpacity key={cat.id} style={styles.categoriaItem} activeOpacity={0.7}>
                        <Text style={styles.categoriaNome}>{cat.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.produtosRow}
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEnabled={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    voltarButton: {
        marginRight: 10,
        borderRadius: 20,
        padding: 8,
    },
    container: {
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
        paddingVertical: 4,
        borderRadius: 20,
    },
    perfilText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
    },
    logo: {
        width: 60,
        height: 60,
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
    categoriasTitulo: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    categoriasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
        

    },
    categoriaItem: {
        alignItems: 'center',
            justifyContent: 'center',
            minWidth: 100,
            minHeight: 50,
            paddingVertical: 10,
            paddingHorizontal: 15,
        },
    categoriaNome: {
            color: '#0F2D3F',
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            marginTop: 5,
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft:-14,
    },
    produtosRow: {
        justifyContent: 'space-between',
    },
    produtoCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '48%',
        marginBottom: 20,
    },
    produtoImagem: {
        width: 80,
        height: 80,
        marginBottom: 8,
    },
    produtoNome: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 4,
    },
    status: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    disponivel: { color: 'green' },
    baixoEstoque: { color: 'orange' },
    indisponivel: { color: 'red' },
});



