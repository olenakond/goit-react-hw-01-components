import { styled } from 'styled-components';

export const Card = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
    border: 'solid 2px grey',
    borderRadius: 10,
  };
});

export const Status = styled('span')(({ $isOnline }) => {
  return {
    display: 'block',
    border: 'solid 1px grey',
    borderRadius: '50%',
    width: 20,
    height: 20,
    backgroundColor: $isOnline ? 'green' : 'red',
  };
});

export const Img = styled('img')(() => {
  return {
    border: 'solid 2px grey',
    borderRadius: 10,
  };
});

export const Name = styled('p')(() => {
  return {
    fontSize: 35,
    textAlign: 'center',
    color: 'grey',
  };
});
