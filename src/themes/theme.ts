import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import Text from './components/text';
import Icon from './components/icon';
import fonts from './fonts';
import breakpoints from './breakpoints';

const overrides = {
  styles: {
    global: {
      '*': {
        fontFamily: "'Nunito', sans-serif",
      },
    },
  },
  breakpoints,
  colors,
  fonts,
  components: {
    Text,
    Icon,
  },
};

export default extendTheme(overrides);
