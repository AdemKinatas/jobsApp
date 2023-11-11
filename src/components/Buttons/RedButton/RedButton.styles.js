import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 3
    },
    icon: {
        color: 'white',
        fontSize: 20,
        marginRight: 3
    }
});