import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { TabStackParamList } from '@interfaces/navigation';

type TabBarIconsType = Record<keyof TabStackParamList, IconDefinition>;

export default TabBarIconsType;
