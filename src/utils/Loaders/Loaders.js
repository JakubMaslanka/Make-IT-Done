import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LoaderContainer, LoaderAnimation, SkeletonContainer } from './Loaders.styles';

export const CircleLoader = () => (
  <LoaderAnimation>
    <div />
    <div />
    <div />
    <div />
  </LoaderAnimation>
);

export const SkeletonLoader = () => (
  <SkeletonTheme color="#2D3E50" highlightColor="#3F5873">
    <SkeletonContainer>
      <Skeleton height={65} count={3} />
    </SkeletonContainer>
  </SkeletonTheme>
);

export const FullScreenContainer = ({ children }) => (
  <LoaderContainer>
    {children}
  </LoaderContainer>
);

FullScreenContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
