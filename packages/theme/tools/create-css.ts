import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NfkThemes, FRAMThemes, TFKThemes} from '../src/themes';

Promise.all([
  outputThemes('atb-theme', AtBThemes),
  outputThemes('nfk-theme', NfkThemes),
  outputThemes('fram-theme', FRAMThemes),
  outputThemes('tfk-theme', TFKThemes),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
