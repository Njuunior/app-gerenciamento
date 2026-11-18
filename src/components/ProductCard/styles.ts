import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.primaryMuted,
  },
  titleBlock: {
    flex: 1,
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  remove: {
    padding: 4,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  brand: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  footer: {
    backgroundColor: colors.primaryMuted,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  price: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
});
