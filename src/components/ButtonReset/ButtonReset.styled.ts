import styled from 'styled-components';

export const Button = styled.button`
  display: block;

  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.normal};

  font-size: ${p => p.theme.fontSizes.m20};

  background-color: ${p => p.theme.colors.cl};
  color: ${p => p.theme.colors.textWhite};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bs};
  }
`;
