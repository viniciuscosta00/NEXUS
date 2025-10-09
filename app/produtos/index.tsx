import { Ionicons } from '@expo/vector-icons';
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
                <TouchableOpacity style={styles.perfilButton}>
                    <Ionicons name="person-outline" size={20} color="#000" />
                    <Text style={styles.perfilText}>Docente</Text>
                </TouchableOpacity>

            
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
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
                    <View key={cat.id} style={styles.categoriaItem}>
                    
                        <Text style={styles.categoriaNome}>{cat.nome}</Text>
                    </View>
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
    container: {
        flex: 1,
        backgroundColor: '#0F2D3F',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    perfilButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 8,
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
    },
    categoriaNome: {
        color: '#0F2D3F',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 5,
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



