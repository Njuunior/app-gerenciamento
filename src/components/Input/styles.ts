import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  wrapper: {
    gap: 6,
    flex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    height: 48,
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    fontSize: 14,
  },
});
