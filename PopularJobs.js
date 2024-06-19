import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from './JobCard';

const PopularJobs = () => {
  const jobCards = [
    { title: "Jr Executive", company: "Burger King", salary: "$96,000/y", location: "Los Angeles, US", logo: require('../assets/burger.png') },
    { title: "Product Manager", company: "Beats", salary: "$84,000/y", location: "Florida, US", logo: require('../assets/product.png') },
    { title: "Account Manager", company: "Salesforce", salary: "$86,000/y", location: "San Francisco, US", logo: require('../assets/businessman.png') },
    { title: "Business Analyst", company: "Accenture", salary: "$86,000/y", location: "Chicago, US", logo: require('../assets/logotype.png') },
    { title: "Systems Engineer", company: " Cisco", salary: "$86,000/y", location: "San Jose, US", logo: require('../assets/call.png') },
    { title: "Graphic Designer", company: "Adobe", salary: "$86,000/y", location: "San Francisco, US", logo: require('../assets/adobe.png') },
    { title: "Customer Manager", company: "HubSpot", salary: "$86,000/y", location: "Boston, US", logo: require('../assets/hubspot.png') },
    { title: "Network Engineer", company: "Google", salary: "$105,000/y", location: " Dallas, US,", logo: require('../assets/google.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      {/* Wrap your job card list in a ScrollView */}
      <ScrollView style={styles.scrollView}>
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
});

export default PopularJobs;
