import styled from 'styled-components';

export const Label = styled.label`
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  display: block;
  margin-left: ${p => p.theme.space[3]}px;
`;
