import { styled } from '@stitches/react';

export const StyledLogin = styled('div', {
  // body:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#767676',
  // },


  h1: {
    color: 'white',
    marginBottom: '20px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    height:'200px',

    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },

    button: {
      width: '100%',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#333',
      color: '#fff',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '#555',
      },
    },
  },
});
