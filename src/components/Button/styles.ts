import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 52,
    width: '100%',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
