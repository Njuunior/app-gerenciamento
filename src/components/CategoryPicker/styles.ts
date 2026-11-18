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
  trigger: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(28, 22, 48, 0.35)',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  menu: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  optionActive: {
    backgroundColor: colors.primaryMuted,
  },
  optionText: {
    fontSize: 15,
    color: colors.text,
  },
  optionTextActive: {
    color: colors.primary,
    fontWeight: '700',
  },
});
