import { black, white } from '@constants/colors';
import { SEMIBOLD, BOLD, SIZES, EXTRA_BOLD, REGULAR } from '@constants/fonts';
import { fontMaker } from '@utils/fontUtils';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: black }),
  headerFont: fontMaker({ size: SIZES.MEDIUM, color: white, weight: EXTRA_BOLD }),
  titleFont: fontMaker({ size: SIZES.XSMALL, color: white, weight: BOLD }),
  paragraphFont: fontMaker({ size: SIZES.XSMALL, color: white }),
  semiBoldFont: fontMaker({ weight: SEMIBOLD, size: SIZES.MEDIUM, color: black }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: black }),

  bigTitle: fontMaker({ weight: BOLD, size: SIZES.XMEDIUM, color: white }),
  mediumTitle: fontMaker({ weight: BOLD, size: SIZES.SMALL, color: white }),
  title: fontMaker({ weight: BOLD, size: SIZES.XSMALL, color: white }),
  regularText: fontMaker({ weight: REGULAR, size: SIZES.XSMALL, color: white }),
  labelText: fontMaker({ weight: SEMIBOLD, size: SIZES.XSMALL, color: white }),
  inputText: fontMaker({ weight: REGULAR, size: SIZES.SMALL, color: white }),
  smallBoldText: fontMaker({ weight: SEMIBOLD, size: SIZES.XSMALL, color: white })
};
