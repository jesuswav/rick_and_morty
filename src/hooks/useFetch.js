import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = async (endPoint) => {
  var data = [];
  try {
    const response = await axios({
      method: 'get',
      url: endPoint,
    });
    // data = response.data.results;
    for (let i = 1; i < response.data.info.pages; i++) {
      try {
        const response = await axios({
          method: 'get',
          url: `${endPoint}?page=${i}`,
        });
        var array = response.data.results;
        array.forEach((element) => {
          data.push(element);
        });
      } catch (error) {
        console.error(error);
      }
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  console.log(data);


  var characters = [];
  for (let i = 0; i < 20; i++) {
    characters.push(data[i]);
  }

  return characters;
};

export default useFetch;
