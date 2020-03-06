import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    setErrorMessage('');
    setResults([]);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'mckinney'
        }
      });
      setResults(response.data.businesses);
    } catch(error) {
      setErrorMessage('Something went wrong. Please try again.');
      console.log('error:', error.response);
    }
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    height: '100%'
  }
});

export default SearchScreen;