import styled from 'styled-components';

export const FilterTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m20};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.white};
`;
