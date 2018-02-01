/**
 * The standard Avatar component.
 * To use it you will have to properly wrap it with react-css-super-themr,
 * the component provided here takes care about the code interface and logic
 * only.
 */

import PT from 'prop-types';
import React from 'react';

function Avatar({ DefaultAvatar, theme, url }) {
  return url
    ? <img alt="Avatar" src={url} className={theme.avatar} />
    : <DefaultAvatar className={theme.avatar} />;
}

Avatar.defaultProps = {
  url: null,
};

Avatar.propTypes = {
  DefaultAvatar: PT.node.isRequired,
  theme: PT.shape({
    avatar: PT.string.isRequired,
  }).isRequired,
  url: PT.string,
};
