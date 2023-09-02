import { styled } from 'styled-components';
import { getRandomHexColor } from '../Utils/randomColor';

export const StatSection = styled('section')(() => {
  return {
    backgroundColor: 'white',
    width: 800,
    margin: '60px auto 0 auto',
    padding: '20px 0 20px 0',
    border: 'solid 2px grey',
    borderRadius: 10,
  };
});

export const StatTitle = styled('h2')(() => {
  return {
    fontSize: 35,
    fontWeight: 700,
    textAlign: 'center',
  };
});

export const StatList = styled('ul')(() => {
  return {
    marginTop: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
});

export const StatElement = styled('li')(() => {
  return {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    paddingBottom: 20,
    border: 'solid 1px grey',
    flexBasis: 'calc(100%/4)',
    backgroundColor: getRandomHexColor(),
  };
});

export const StatElementLabel = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  };
});

export const StatElementPercentage = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  };
});
