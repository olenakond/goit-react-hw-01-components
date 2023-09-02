import { styled } from 'styled-components';

export const ProfileCard = styled('div')(() => {
  return {
    backgroundColor: 'white',
    width: 500,
    height: 700,
    margin: '0 auto',
    border: 'solid 2px grey',
    borderRadius: 10,
    overflow: 'hidden',
  };
});

export const ProfileInfo = styled('div')(() => {
  return {
    padding: '20px 20px 20px 20px',
  };
});

export const ProfileImg = styled('img')(() => {
  return {
    margin: '0 auto',
    borderRadius: '50%',
    border: 'solid 2px grey',
  };
});

export const ProfileName = styled('p')(() => {
  return {
    marginTop: 30,
    fontSize: 35,
    fontWeight: 700,
    textAlign: 'center',
  };
});

export const ProfileTag = styled('p')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  };
});

export const ProfileLocation = styled('p')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  };
});

export const ProfileStat = styled('ul')(() => {
  return {
    marginTop: 40,
    backgroundColor: '#f5f6f8',
    display: 'flex',
    height: 150,
  };
});

export const ProfileStatElement = styled('li')(() => {
  return {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    border: 'solid 1px grey',
    flexBasis: 'calc(100%/3)',
  };
});

export const ProfileStatTitle = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
  };
});

export const ProfileStatValue = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  };
});
