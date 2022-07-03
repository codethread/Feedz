module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@screens': './src/screens',
          '@icons': './src/icons',
          '@styles': './src/styles',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
