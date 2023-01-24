import { View, Text, Image, StyleSheet } from 'react-native';

const NotImplementedScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Not Implemented</Text>
        <Image 
            source={{
                uri: 'https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}
            style={styles.image}
            resizeMode="contain"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        color: "gray",
    },
    image: {
        width: "80%",
        aspectRatio: 2 / 1,
    },
});

export default NotImplementedScreen;