import React, { useState } from "react";
import {View,StyleSheet,Text} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
   const [term, setTerm] = useState('');

 return (<View>
      <SearchBar 
         data={term} 
         onChange = { newTerm => setTerm(newTerm)}
         onSubmit = { () => console.log("submitted")} >
      </SearchBar>
    <Text>Search Screen</Text>
    <Text>{term}</Text>
 </View>
 );
};

const styles = StyleSheet.create({});

export default SearchScreen;