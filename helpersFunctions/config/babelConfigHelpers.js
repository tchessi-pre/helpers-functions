module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@screens': './src/screens',
            '@store': './src/store',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@services': './src/services',
            '@helpers': './src/helpers',
            // Alias pour les sous-dossiers
            '@services/*': './src/services/*',
            '@helpers/*': './src/helpers/*',
            // Alias pour les sous-dossiers spécifiques
            '@images': './src/assets/images',
            '@card': './src/components/card',
            '@header': './src/components/header',
          },
        },
      ],
    ],
  };
};

// EXEMPLE D'UTILISATION

// import { ApiService } from '@services/ApiService'; // Importer un service
// import { myHelperFunction } from '@helpers/myHelper'; // Importer une fonction d'aide

// import exampleImage from '@images/example-image.jpg'; // exemple de '@images': './src/assets/images',

// import SomeService from '@services/someService'; // exemple de  '@services/*': './src/services/*',
// import SomeHelper from '@helpers/someHelper';
