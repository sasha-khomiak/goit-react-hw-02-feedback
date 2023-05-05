import styled from '@emotion/styled';

export const Popularity = styled.div`
  height: 30px;
  width: 100%;
  /* background-color: red; */
  margin-top: 20px;
  display: flex;
`;

export const Good = styled.div`
  height: 100%;
  background-color: green;
  width: ${props => `${props.persentGood}%`};
`;

export const Neutral = styled.div`
  height: 100%;
  background-color: orange;
  width: ${props => `${props.persentNeutral}%`};
`;

export const Bad = styled.div`
  height: 100%;
  background-color: red;
  width: ${props => `${props.persentBad}%`};
`;
