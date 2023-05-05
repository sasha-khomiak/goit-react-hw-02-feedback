import styled from '@emotion/styled';

export const StatisticsWrap = styled.div`
  display: flex;
`;

export const Colum = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;

  gap: 5px;
`;

export const Option = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: calc(16 / 14);

  text-align: center;
  letter-spacing: 0.05em;

  color: black;
`;

export const Result = styled.span`
  background: #f13c6e;
  border-radius: 30px;
  height: 35px;

  font-size: 14px;
  line-height: calc(16 / 14);

  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;
