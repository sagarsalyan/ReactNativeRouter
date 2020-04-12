import React, { Component } from 'react'
import { StyleSheet, Text, View} from "react-native";

const About = () => {
  return(
    <Text style={styles.header}>About</Text>
  )
}

export default About

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
