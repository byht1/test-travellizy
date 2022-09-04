import styled from 'styled-components';

export const AsideBox = styled.aside`
  position: fixed;
  top: 80px;
  left: 0;
  width: ${p => p.theme.size.bar};
  height: calc(${p => p.theme.size.maxVH} - 80px);
  padding-top: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[4]}px;
  overflow-y: auto;
  text-align: left;

  background-color: ${p => p.theme.colors.bs};
`;
