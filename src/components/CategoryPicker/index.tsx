import { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

import { CATEGORIES, CATEGORY_LABELS, Category } from '@/types/Category';
import { colors } from '@/theme/colors';

import { styles } from './styles';

type Props = {
  label: string;
  value: Category;
  onChange: (category: Category) => void;
};

export function CategoryPicker({ label, value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.trigger} onPress={() => setOpen(true)} activeOpacity={0.8}>
        <Text style={styles.value}>{CATEGORY_LABELS[value]}</Text>
        <ChevronDown size={18} color={colors.textSecondary} />
      </TouchableOpacity>

      <Modal transparent visible={open} animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.menu}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                style={[styles.option, value === category && styles.optionActive]}
                onPress={() => {
                  onChange(category);
                  setOpen(false);
                }}
              >
                <Text style={[styles.optionText, value === category && styles.optionTextActive]}>
                  {CATEGORY_LABELS[category]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
