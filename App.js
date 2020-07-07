import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Button, Image} from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => {
  const URL_CAT = 'https://cataas.com/cat/cute';

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const response = await fetch(URL_CAT);
    return response;
  };

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Ache o seu Gato
          </Text>
        </View>
        <TextInput
          style={tailwind(
            'bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700',
          )}
          value=""
        />

        <Image style={{height: 500, width: 400}} source={{uri: URL_CAT}} />
      </View>
    </SafeAreaView>
  );
};
export default App;
