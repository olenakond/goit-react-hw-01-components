import { styled } from 'styled-components';

export const Table = styled('table')(() => {
  return {
    margin: '60px auto 0 auto',
    width: 1000,
    backgroundColor: 'white',
    fontSize: 30,
    textAlign: 'center',
    border: '1px solid grey',
  };
});

export const Head = styled('thead')(() => {
  return {
    backgroundColor: '#77b5fe',
    color: 'white',
  };
});

export const HeadEl = styled('th')(() => {
  return {
    padding: 10,
  };
});

export const El = styled('td')(() => {
  return {
    padding: 10,
    color: 'grey',
    borderRight: '1px solid grey',
    borderBottom: '1px solid grey',
  };
});

export const Row = styled('tr')(() => {
  return {
    '&:nth-child(2n)': {
      backgroundColor: '#EBEDEF',
    },
  };
});
