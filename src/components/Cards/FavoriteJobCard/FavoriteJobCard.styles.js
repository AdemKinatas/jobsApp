import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#C0C0C0",
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        borderRadius: 8,
        flexDirection: "column",
    },
    name: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    company_name: {
        fontSize: 16,
        color: "black",
    },
    container_location: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        borderColor: "#F74B4B",
        backgroundColor: "#F74B4B",
        padding: 5,
        alignSelf: "flex-start"
    },
    location_name: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    level_name: {
        marginTop: 5,
        color: "#F74B4B",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'right',
    },
});