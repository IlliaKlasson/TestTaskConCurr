import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.lg};
`;

export const Text = styled.div`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
