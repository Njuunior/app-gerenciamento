import { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: ReactNode;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85} {...rest}>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
