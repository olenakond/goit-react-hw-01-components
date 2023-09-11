import { styled } from 'styled-components';

export const Card = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: 500,
    height: 700,
    margin: '0 auto',
    border: 'solid 2px grey',
    borderRadius: 10,
    overflow: 'hidden',
  };
});

export const Info = styled('div')(() => {
  return {
    padding: '20px 20px 20px 20px',
  };
});

export const Img = styled('img')(() => {
  return {
    margin: '0 auto',
    borderRadius: '50%',
    border: 'solid 2px grey',
  };
});

export const Name = styled('p')(() => {
  return {
    marginTop: 50,
    fontSize: 35,
    fontWeight: 700,
    textAlign: 'center',
  };
});

export const Tag = styled('p')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  };
});

export const Location = styled('p')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  };
});

export const Stat = styled('ul')(() => {
  return {
    marginTop: 'auto',
    backgroundColor: '#f5f6f8',
    display: 'flex',
    height: 150,
  };
});

export const StatElement = styled('li')(() => {
  return {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    border: 'solid 1px grey',
    flexBasis: 'calc(100%/3)',
  };
});

export const StatTitle = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
  };
});

export const StatValue = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  };
});
