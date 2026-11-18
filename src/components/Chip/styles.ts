import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  activeText: {
    color: colors.white,
  },
});
