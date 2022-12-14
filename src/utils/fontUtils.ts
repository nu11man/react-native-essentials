import { TextStyle, Platform } from 'react-native';
import { NUNITO, REGULAR, SEMIBOLD, BOLD, NORMAL, ITALIC, EXTRA_BOLD } from '@constants/fonts';
import { moderateScale } from '@utils/scalingUtils';
import { StringObject } from '@interfaces/globalInterfaces';

const REGULAR_WEIGHT: string = '400';
const NORMAL_STYLE: string = 'normal';

interface FontMakerOptions {
  size?: number;
  color?: string;
  weight?: string;
  family?: string;
  style?: string;
}

interface Types {
  weights: StringObject;
  styles: StringObject;
}

// Here you can replace NUNITO with your custom font.
// Also, you can add or remove some weights or styles that don't apply with your custom font.
const fonts: Record<string, Types> = {
  [NUNITO]: {
    weights: {
      [REGULAR]: REGULAR_WEIGHT,
      [SEMIBOLD]: '600',
      [BOLD]: '700',
      [EXTRA_BOLD]: '800'
    },
    styles: {
      [NORMAL]: NORMAL_STYLE,
      [ITALIC]: 'italic'
    }
  }
};

export const fontMaker = (options: FontMakerOptions = {}): TextStyle => {
  const { size = null, color = null } = options;
  let { weight = null, style = null, family = NUNITO } = options;

  let font = {};
  const { weights, styles } = fonts[family];

  if (Platform.OS === 'android') {
    weight = weight !== REGULAR && weights?.[weight!] ? weight : '';
    style = style !== NORMAL && styles?.[style!] ? style : '';

    family = family.split(' ').join('');
    const suffix = weight! + style!;

    font = { fontFamily: family + (suffix.length ? `-${suffix}` : '') };
  } else {
    weight = weights?.[weight!] || weights?.[REGULAR] || REGULAR_WEIGHT;
    style = styles?.[style!] || styles?.[NORMAL] || NORMAL_STYLE;

    font = { fontFamily: family, fontWeight: weight, fontStyle: style };
  }

  font = size ? { ...font, fontSize: moderateScale(size) } : font;
  font = color ? { ...font, color } : font;

  return font;
};
