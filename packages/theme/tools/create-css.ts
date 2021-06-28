import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes} from '../src/themes';
import {colors as AtBColor} from '../src/themes/atb-theme/colors';

Promise.all([outputThemes('atb-theme', AtBThemes,AtBColor), outputTypography()]).then(
  () => console.log('Written CSS files'),
  console.error,
);
