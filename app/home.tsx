import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 1. Definição das Cores
const COLORS = {
    background: "#0d1f2d", // Fundo Azul Escuro (do seu SplashScreen)
    card: "#FFFFFF", // Fundo dos cards/botões
    textPrimary: "#333333", // Texto principal
    textSecondary: "#888888", // Texto secundário/ícones
    buttonDocente: "#FFFFFF", // Fundo do botão "Docente"
    textDocente: "#0d1f2d", // Texto do botão "Docente"
    separator: "#dddddd", // Linha separadora
};

// 2. Componente de Item do Menu
interface MenuItemProps {
    iconName: keyof typeof Feather.glyphMap;
    title: string;
    onPress: () => void;
    isLast?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconName, title, onPress, isLast }) => (
    <TouchableOpacity
        style={[styles.menuItem, !isLast && styles.menuItemSeparator]}
        onPress={onPress}
    >
        <Feather name={iconName} size={24} color={COLORS.textPrimary} />
        <Text style={styles.menuItemText}>{title}</Text>
        <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={COLORS.textSecondary}
        />
    </TouchableOpacity>
);

// 3. Componente Principal da Tela
const HomeMenu: React.FC = () => {
    // Use 'useNavigation' se esta tela for parte do React Navigation
    // const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const handleNavigation = (screen: string) => {
        console.log(`Navegar para: ${screen}`);
        // Exemplo real: navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
            <View style={styles.container}>

                {/* === SEÇÃO DO HEADER/PERFIL === */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.profileButton}>
                        <Ionicons name="person-circle-outline" size={20} color={COLORS.textDocente} />
                        <Text style={styles.profileButtonText}>Docente</Text>
                    </TouchableOpacity>
                </View>

                {/* === LOGO E TÍTULO === */}
                <View style={styles.logoContainer}>
                    {/* ASSUMIMOS QUE SUA LOGO NEXUS É COMPARTILHADA COM O SPLASH */}
                    <Image
                        source={require("../assets/images/logo1.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>NEXUS</Text>
                </View>

                {/* === SEÇÃO DE MENUS === */}
                <View style={styles.menuContainer}>
                    <MenuItem
                        iconName="list"
                        title="Meus pedidos"
                        onPress={() => handleNavigation("PedidosScreen")}
                    />
                    <MenuItem
                        iconName="plus-circle"
                        title="Solicitar"
                        onPress={() => handleNavigation("SolicitarScreen")}
                    />
                    <MenuItem
                        iconName="package"
                        title="Produtos"
                        onPress={() => handleNavigation("ProdutosScreen")}
                        isLast // Remove o separador da última linha
                    />
                </View>

                {/* === BANNER INFERIOR === */}
                <View style={styles.bannerContainer}>
                    {/* A imagem de estoque aqui é um placeholder. Você deve substituí-la 
            por uma imagem real do seu projeto. 
          */}
                    <Image
                        source={require("../assets/images/banner.png")} // TROCAR ESTA IMAGEM
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeMenu;

// 4. Estilos
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background, // Cor de fundo principal
    },
    container: {
        flex: 1,
        paddingHorizontal: 20, // Espaçamento lateral
    },
    // --- HEADER ---
    header: {
        alignSelf: "flex-start", // Alinha o botão à esquerda
        marginTop: 10,
        marginBottom: 30, // Espaço abaixo do botão até a logo
    },
    profileButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.buttonDocente,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profileButtonText: {
        color: COLORS.textDocente,
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 14,
    },
    // --- LOGO E TÍTULO ---
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        tintColor: COLORS.card, // Deixa a logo branca
    },
    title: {
        fontSize: 18,
        color: COLORS.card,
        fontWeight: "bold",
        marginTop: 8,
        letterSpacing: 2,
    },
    // --- MENU ---
    menuContainer: {
        backgroundColor: COLORS.card,
        borderRadius: 10,
        overflow: "hidden", // Para garantir que os cantos arredondados funcionem com os separadores
        marginBottom: 30,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 18,
        paddingHorizontal: 15,
        backgroundColor: COLORS.card,
    },
    menuItemText: {
        flex: 1, // Faz o texto ocupar o espaço central
        marginLeft: 15,
        fontSize: 16,
        color: COLORS.textPrimary,
    },
    menuItemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.separator,
    },
    // --- BANNER ---
    bannerContainer: {
        flex: 1, // Ocupa o restante do espaço
        borderRadius: 10,
        overflow: "hidden",
    },
    bannerImage: {
        width: "100%",
        height: "100%",
    },
});