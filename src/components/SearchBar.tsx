import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mediumOrange, white } from '../assets/colors';

interface SearchBarProps {
    style?: ViewStyle,
    onSearch: (text: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={[styles.searchBarInput, props.style]}
        placeholder="Search"
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      <Ionicons name="search" size={24} color="gray" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: 16,
    borderWidth: 3,
    borderColor: mediumOrange
  },
  searchBarInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default SearchBar;
