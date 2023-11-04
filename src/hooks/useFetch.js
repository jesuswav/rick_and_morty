import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = async (endPoint) => {
  var data;
  try {
    const response = await axios({
      method: 'get',
      url: endPoint,
    });
    data = response.data.results;
  } catch (error) {
    console.error(error);
  }

  return data;
};

export default useFetch;
