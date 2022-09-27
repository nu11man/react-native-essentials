import { Source } from 'react-native-fast-image';

export const hasValidSource = (source?: Source) => {
  if (!source?.uri) return false;
  return source.uri.startsWith('http:') || source.uri.startsWith('https:');
};
