import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, style, ...rest }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.container, style]} placeholderTextColor="#9A93B0" {...rest} />
    </View>
  );
}
