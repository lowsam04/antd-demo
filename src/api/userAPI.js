import React from 'react'

const getUserData = async () => {
     try {
      const response = await fetch('https://reqres.in/api/users');
      const json = await response.json();
      return(json);
     } catch (error) {
      console.error(error);
     }
    }


export {getUserData} ;