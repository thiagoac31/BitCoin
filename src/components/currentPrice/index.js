import React from "react";
import {View, Text} from "react-native"
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View>
            <Text style={styles.currentPrice}>$45657</Text>
            <Text style={styles.textPrice}>Ultima cotacao</Text>
        </View>
    );
}
