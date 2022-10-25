import styled, { StyledComponent } from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.lg};
`;

export const Input: StyledComponent<'input', any, {}> = styled.input`
  height: 45px;
  min-width: 205px;
  border-radius: ${p => p.theme.radii.lg} 0 0 ${p => p.theme.radii.lg};
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.none};
  outline: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  height: 45px;
  border-radius: 0 ${p => p.theme.radii.lg} ${p => p.theme.radii.lg} 0;
  border: ${p => p.theme.borders.none};
`;


