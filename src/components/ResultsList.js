import React from "react";
import { Text, View,StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results}) => {
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
                    return <ResultDetail result={item}/>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontWeight : 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    viewStyle : {
        marginBottom : 10
    }
});

export default ResultsList;