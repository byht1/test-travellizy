import styled from 'styled-components';

export const HeaderBox = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.size.max};
  background-color: ${p => p.theme.colors.bcb};

  display: flex;
  justify-content: center;
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
