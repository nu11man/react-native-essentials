import { black, white } from '@constants/colors';
import { SEMIBOLD, BOLD, SIZES, EXTRA_BOLD } from '@constants/fonts';
import { fontMaker } from '@utils/fontUtils';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: black }),
  headerFont: fontMaker({ size: SIZES.MEDIUM, color: white, weight: EXTRA_BOLD }),
  titleFont: fontMaker({ size: SIZES.XSMALL, color: white, weight: BOLD }),
  paragraphFont: fontMaker({ size: SIZES.XSMALL, color: white }),
  semiBoldFont: fontMaker({ weight: SEMIBOLD, size: SIZES.MEDIUM, color: black }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: black })
};
