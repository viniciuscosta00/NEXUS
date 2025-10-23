import { router } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Splash() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.navigate('/bemvindo1')}>
            <Image
                source={require('../../assets/images/logoNexus.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#032b3f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});