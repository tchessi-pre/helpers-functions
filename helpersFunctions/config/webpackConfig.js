const path = require('path');

module.exports = {
  // Autres options de configuration de Webpack...
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      // Ajouter des alias pour les sous-dossiers spécifiques
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@card': path.resolve(__dirname, 'src/components/card'),
      '@header': path.resolve(__dirname, 'src/components/header'),
    },
  },
};

// EXEMPLE D'UTILISATION

// import exampleImage from '@images/example-image.jpg'; // Importer une image depuis le dossier 'images'

// import CardComponent from '@card/CardComponent'; // Importer un composant depuis le dossier 'card'
// import HeaderComponent from '@header/HeaderComponent'; // Importer un composant depuis le dossier 'header'

