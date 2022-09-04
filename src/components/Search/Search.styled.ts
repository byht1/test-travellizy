import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.size.max};
  background-color: ${p => p.theme.colors.bcb};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: ${p => p.theme.borders.none};
  width: ${p => p.theme.size.half};
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};

  font-size: ${p => p.theme.fontSizes.m};
`;

export const Warning = styled.p`
  display: block;

  width: 200px;

  font-size: 20px;
  font-weight: 700;
  text-align: center;

  color: red;

  @media screen and (max-width: 899.9px) {
    display: none;
  }
`;
