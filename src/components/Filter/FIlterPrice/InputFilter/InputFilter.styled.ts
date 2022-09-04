import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-basis: ${p => p.theme.size.half};
`;

export const Input = styled.input`
  outline: ${p => p.theme.borders.none};
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.size.max};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
