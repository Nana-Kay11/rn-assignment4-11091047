import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ title, company, salary, location, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 5,
  },
  location: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});

export default JobCard;
