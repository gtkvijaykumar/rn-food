import React from "react";
import { Text, View,StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            {/* <Text >Results: {results.length}</Text> */}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={ result=> result.id}
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow')}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontWeight : 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginLeft : 10
    },
    viewStyle : {
        marginBottom : 10
    }
});

export default ResultsList;