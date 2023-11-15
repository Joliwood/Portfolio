module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    // 'linebreak-style': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 0,
    // 'no-underscore-dangle': 'off',
    // 'react/function-component-definition': 'off',
    'react/prop-types': 0,
  },
};
