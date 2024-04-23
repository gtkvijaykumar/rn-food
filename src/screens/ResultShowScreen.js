import react from "react";
import { Text,View, StyleSheet } from "react-native";

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    return( 
    <View>
        <Text>This is from Results Show Screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;