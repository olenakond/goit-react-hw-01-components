import { styled } from 'styled-components';
import { getRandomHexColor } from '../../Utils/randomColor';

export const Section = styled('section')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'white',
    width: 750,
    margin: '60px auto 0 auto',
    padding: '20px 0 0 0',
    border: 'solid 2px grey',
    borderRadius: 10,
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 35,
    fontWeight: 700,
    textAlign: 'center',
  };
});

export const List = styled('ul')(() => {
  return {
    marginTop: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
});

export const Element = styled('li')(() => {
  return {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    paddingBottom: 20,
    flexBasis: 'calc(100%/5)',
    backgroundColor: getRandomHexColor(),
  };
});

export const Label = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  };
});

export const Percentage = styled('span')(() => {
  return {
    marginTop: 20,
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  };
});
