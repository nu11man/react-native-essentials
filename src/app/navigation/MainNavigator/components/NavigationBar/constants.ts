import { faWpexplorer } from '@fortawesome/free-brands-svg-icons/faWpexplorer';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons/faBookBookmark';
import { faUserPen } from '@fortawesome/free-solid-svg-icons/faUserPen';

import { Screens } from '@constants/navigation';

import TabBarIconsType from './types';

const ICONS: TabBarIconsType = {
  [Screens.HOME]: faWpexplorer,
  [Screens.BOOKMARKS]: faBookBookmark,
  [Screens.PROFILE]: faUserPen
};

export default ICONS;
