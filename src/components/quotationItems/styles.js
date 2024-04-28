import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContation: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius:10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    contextLeft: {
        width:"40%",
        height: "100%",
        alignItems:"center"
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    logoBitCoin: {
        width: 40,
        height: 40,
        marginLeft:2,


    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 10,
        color:"#ffff",
        fontWeight: "bold",
    },
    contextRigth: {
        width:"56%",
        alignItems:"flex-end"
    },
    price: {
        color:"#ffff",
        fontWeight: "bold",
        fontSize: 18,

    }
    
    
   
}) 

export default styles