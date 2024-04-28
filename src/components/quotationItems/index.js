import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../quotationItems/styles";

export default function QuotationItems(props){
    return(
        <View style={styles.mainContation}> 
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style= {styles.logoBitCoin}
                        source={require("../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>{props.data}</Text>
                </View>
            </View> 
            <View style={styles.contextRigth}>
                <Text style={styles.price}>{props.valor}</Text>
            </View>
        </View>

       
    )
}