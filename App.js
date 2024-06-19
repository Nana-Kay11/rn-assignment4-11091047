import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {!user ? <Login setUser={setUser} /> : <Home user={user} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
