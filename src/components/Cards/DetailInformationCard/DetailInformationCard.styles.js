import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        borderRadius: 8,
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
    },
    name: {
        color: "#194740",
        fontSize: 20,
        fontWeight: "bold",
    },
    location_container: {
        flexDirection: "row",
    },
    location_title: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    location_name: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    level_container: {
        flexDirection: "row",
    },
    level_title: {
        marginTop: 5,
        color: "red",
        fontSize: 16,
        fontWeight: "bold",
    },
    level_name: {
        marginTop: 5,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    job_detail: {
        fontSize: 16,
        color: "#194740",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
});