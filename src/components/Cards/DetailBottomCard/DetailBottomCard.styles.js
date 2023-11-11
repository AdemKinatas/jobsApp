import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        borderRadius: 8,
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        
    },
    button_container: {
        flex: 1, 
        margin:10,
        marginBottom: 20, 
    },
});