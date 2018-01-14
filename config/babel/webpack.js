/* Babel preset for the Webpack build. */

const envPresetOps = {};

const reactCssModulesPluginOps = {
  filetypes: {
    '.scss': {
      syntax: 'postcss-scss',
    },
  },
};

const config = {
  presets: [
    ['env', envPresetOps],
    'react',
    'stage-2',
  ],
  plugins: [
    ['module-resolver', {
      extensions: ['.js', '.jsx'],
      root: [
        './src/shared',
        './src',
      ],
    }],
    'inline-react-svg',
    'transform-runtime',
    ['react-css-modules', reactCssModulesPluginOps],
  ],
};

switch (process.env.BABEL_ENV) {
  case 'development':
    reactCssModulesPluginOps.generateScopedName = '[path][name]___[local]';
    config.plugins.push('react-hot-loader/babel');
    break;
  case 'production':
    reactCssModulesPluginOps.generateScopedName = '[hash:base64:6]';
    break;
  default:
}

module.exports = config;
