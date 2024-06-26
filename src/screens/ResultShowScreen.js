import react,{useState,useEffect} from "react";
import { Text,View, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect( () => {
        getResult(id); 
    }, []);
    return( 
    <View>
        <Text>This is from Results Show Screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;