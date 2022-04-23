import styled from '@emotion/styled';
import { SpinnerRoundFilled } from 'spinners-react';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Spinner = styled(SpinnerRoundFilled)`
  margin: 0 auto;
`;
