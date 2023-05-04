import styled from '@emotion/styled';

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 10px;
  background: #f5f4fa;
  border-radius: 4px;
  border-width: 0;

  font-size: 16px;
  line-height: calc(26 / 16);

  text-align: center;
  letter-spacing: 0.03em;

  color: #212121;

  cursor: pointer;

  &:hover {
    background: #2196f3;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);

    color: #ffffff;
  }
`;
