import styled from 'styled-components';
import { theme } from './../../theme/theme';

export const ListProducts = styled.ul`
  width: ${p => p.theme.size.max};
  padding: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[6] + p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[8] + p.theme.space[4]}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; */
  gap: ${p => p.theme.space[3]}px;
`;

export const Elements = styled.li`
  margin-top: auto;
  padding: ${p => p.theme.space[4]}px;
  flex-basis: calc(${p => p.theme.size.quarter} - 32px);
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m20};
  text-align: center;

  &:last-child {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[3]}px;
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
