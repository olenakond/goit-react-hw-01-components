import { styled } from 'styled-components';

export const FriendCard = styled('li')(() => {
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

export const FriendStatus = styled('span')(({ isOnline }) => {
  return {
    display: 'block',
    backgroundColor: isOnline ? 'green' : 'red',
    border: 'solid 1px grey',
    borderRadius: '50%',
    width: 20,
    height: 20,
  };
});

export const FriendImg = styled('img')(() => {
  return {
    border: 'solid 2px grey',
    borderRadius: 10,
  };
});

export const FriendName = styled('p')(() => {
  return {
    fontSize: 35,
    textAlign: 'center',
    color: 'grey',
  };
});
