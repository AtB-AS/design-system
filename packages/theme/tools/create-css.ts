import outputThemes from './create-theme';
import outputTypography from './create-typo';
import { AtBThemes } from '../src/themes';
Promise.all([outputThemes('atb-theme',AtBThemes), outputTypography()]).then(
  () => console.log('Written CSS files'),
  console.error,
);

