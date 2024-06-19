import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from './JobList';

const FeaturedJobs = () => {
  const jobCards = [
    { title: "Software Engineer", company: "Facebook", salary: "$180,000/y", location: "Accra, Ghana", logo: require('../assets/facebook.png') },
    { title: "Jr Developer", company: "Google", salary: "$160,000/y", location: "California, US", logo: require('../assets/google.png') },
    { title: "Product Manager", company: "Facebook", salary: "$120,000/y", location: "New York, US", logo: require('../assets/facebook.png') },
    { title: "DevOps Engineer", company: "Netflix", salary: "$150,000/y", location: "Los Gatos, US", logo: require('../assets/netflix.png') },
    { title: "Blockchain Developer", company: "IBM", salary: "$150,000/y", location: "New York, US", logo: require('../assets/ibm.png') },
    { title: "Maketing Manager", company: "Tesla", salary: "$150,000/y", location: "Pal Alto, US", logo: require('../assets/tesla.png') },
    { title: "UX Designer", company: "Apple", salary: "$150,000/y", location: "Cupertino, US", logo: require('../assets/apple-logo.png') },
    { title: "Data Scientist", company: "Microsoft", salary: "$140,000/y", location: "Redmond, US", logo: require('../assets/microsoft.png') },

  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  seeAll: {
    fontSize: 16,
    color: '#3498db',
  },
});

export default FeaturedJobs;
