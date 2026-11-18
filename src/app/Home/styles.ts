import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 16,
    gap: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    gap: 12,
    shadowColor: '#4B2A8A',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  imagePreview: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.primaryMuted,
  },
  imageButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.primaryMuted,
  },
  imageButtonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 13,
  },
  section: {
    marginTop: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  searchBox: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 2,
  },
  listContent: {
    paddingBottom: 40,
    gap: 12,
  },
  empty: {
    marginTop: 12,
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 14,
    paddingVertical: 24,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
