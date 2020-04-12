import React, { Component } from 'react'
import { StyleSheet, Text, View} from "react-native";

const Home = () => {
  return(
    <Text style={styles.header}>Home</Text>
  )
}

export default Home;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
