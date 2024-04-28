import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filter: {
       width:"100%",
       flexDirection:"row",
       paddingVertical:15,
       justifyContent: "space-evenly"
   },
   buttonQuery: {
        width: 50,
        height: 30,
        backgroundColor: "#f50d41",
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center"
   },
   textButtonQuery: {
        color:"#ffff",
        fontWeight:"bold",
        fontSize:14
   }
}) 

export default styles