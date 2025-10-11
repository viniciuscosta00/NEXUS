import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Categoria = {
    id: string;
    nome: string;

};

export default function TelaProdutos() {
    const [busca, setbusca] = useState('');

    const categorias: Categoria[] = [

        { id: '1', nome: 'Informática' },
        { id: '2', nome: 'Limpeza' },
        { id: '3', nome: 'Papelaria' },
    ];

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
                        <Text style={styles.perfilText}>Docente</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
            </View>

            <View style={styles.btnForaEstoqueContainer}>
                <TouchableOpacity style={styles.btnForaEstoque}
                                onPress={() => router.navigate('/solicitar_fora_do_estoque')}>
                    <Text style={styles.btnForaEstoqueText}>Solicitar item</Text>
                    <Text style={styles.btnForaEstoqueText}>fora do estoque</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Ionicons name="add-outline" size={100} color="#fff" />
            
                <Text style={styles.title}>Solicitar</Text>
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


            <View style={styles.categoriaContainer}>
                {categorias.map((cat) => (
                    <TouchableOpacity key={cat.id} style={styles.categoriaItem} activeOpacity={0.7}>
                        <Text style={styles.categoriaNome}>{cat.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/pendrive.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Pen Drive SanDisk, 64GB</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusIndisponivel}>Indisponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/fone.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Plantronics Headset Blackwire USB</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusBaixoEstoque}>Baixo estoque</Text>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/grampeador.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Grampeador Metal 11,5</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusBaixoEstoque}>Baixo estoque</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/mouse.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Mouse USB 12000dpi(Multilaser)</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/resma.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Resma folha A4(Report)</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/tesoura.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Tesoura Ergonomica-Blister</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/teclado.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Teclado(Multilaser)</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusBaixoEstoque}>Baixo estoque</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/estabilizador.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Estabilizador Coletek Bem Ligado ES-500VA-BM</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusIndisponivel}>Indisponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/borrifador.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Borrifador Plástico - 580ml</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/pano.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Kit 6 Flanelas,Laranja - 28cm x 38cm</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/calculadora.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Calculadora Grande 12 Dígitos </Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.produtoItem}>
                <Image source={require('@/assets/images/escova.png')} style={styles.produtoImg} resizeMode="contain" />
                <View style={styles.produtoInfo}>
                    <Text style={styles.produtoNome}>Escova Multiúso Tradicional</Text>
                    <View style={styles.quantidadeRow}>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtdNum}>1</Text>
                        <TouchableOpacity style={styles.qtdBtn}><Text style={styles.qtdBtnText}>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn}><Text style={styles.addBtnText}>+10</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.statusDisponivel}>Disponível</Text>
                </View>
            </View>
            </TouchableOpacity>
            

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
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    btnForaEstoque: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#0F2D3F',
    },
    btnForaEstoqueText: {
        color: '#0F2D3F',
        fontSize: 14,
        fontWeight: 'bold',
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
    categoriaTitulo: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    categoriaContainer: {
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
        marginLeft: -14,
    },
    produtoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },
    produtoImg: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    produtoNome: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 8,
        color: '#222',
        textDecorationLine: 'underline',
    },
    quantidadeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    qtdBtn: {
        backgroundColor: '#eee',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginHorizontal: 2,
    },
    qtdBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    qtdNum: {
        fontSize: 16,
        marginHorizontal: 4,
    },
    addBtn: {
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 2,
        marginLeft: 10,
    },
    addBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusIndisponivel: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,
    },
    statusBaixoEstoque: {
        color: 'orange',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,
    },
    statusDisponivel: {
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,
    },
});



