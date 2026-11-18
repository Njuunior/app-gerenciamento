import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';

import { CATEGORY_LABELS } from '@/types/Category';
import { Product } from '@/types/Product';
import { colors } from '@/theme/colors';

import { styles } from './styles';

type Props = {
  data: Product;
  onRemove: () => void;
};

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function ProductCard({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          {data.imageUri ? <Image source={{ uri: data.imageUri }} style={styles.image} /> : null}
          <View style={styles.titleBlock}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{CATEGORY_LABELS[data.category]}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.remove} onPress={onRemove} activeOpacity={0.7}>
          <Trash2 size={18} color={colors.danger} />
        </TouchableOpacity>
      </View>

      {data.description ? <Text style={styles.description}>{data.description}</Text> : null}
      {data.brand ? <Text style={styles.brand}>Marca: {data.brand}</Text> : null}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Quantidade: {data.quantity}</Text>
        <Text style={styles.price}>{formatPrice(data.price)}</Text>
      </View>
    </View>
  );
}
