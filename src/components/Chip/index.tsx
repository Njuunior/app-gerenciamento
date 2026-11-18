import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  isActive?: boolean;
  onPress: () => void;
};

export function Chip({ label, isActive = false, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.active]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
}
