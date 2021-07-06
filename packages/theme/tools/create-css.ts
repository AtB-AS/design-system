import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NFKThemes} from '../src/themes';
import {colors as AtBColors} from '../src/themes/atb-theme/colors';
import {colors as NFKColors} from '../src/themes/nfk-theme/colors';

Promise.all([outputThemes('atb-theme', AtBThemes,AtBColors), outputTypography()]).then(
  () => console.log('Written CSS files'),
  console.error,
);

Promise.all([outputThemes('nfk-theme', NFKThemes,NFKColors), outputTypography()]).then(
  () => console.log('Written CSS files'),
  console.error,
);
