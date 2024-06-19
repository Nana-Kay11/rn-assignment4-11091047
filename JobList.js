
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobList = ({ title, company, salary, location, logo }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 250,
  },
  logo: {
    width: 30,
    height: 30,
    marginBottom: 10,
    backgroundColor: 'white', 
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    color: '#fff',
    fontSize: 16,
  },
  location: {
    color: '#fff',
    fontSize: 16,
  },
});

export default JobList;
