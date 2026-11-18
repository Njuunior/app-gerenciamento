import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { ImagePlus, Plus, Search } from 'lucide-react-native';

import { Button } from '@/components/Button';
import { CategoryPicker } from '@/components/CategoryPicker';
import { Chip } from '@/components/Chip';
import { Input } from '@/components/Input';
import { ProductCard } from '@/components/ProductCard';
import { loadProducts, saveProducts } from '@/storage/products';
import { CATEGORIES, CATEGORY_LABELS, Category } from '@/types/Category';
import { Product } from '@/types/Product';
import { colors } from '@/theme/colors';

import { styles } from './styles';

export function Home() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState(Category.STATIONERY);
  const [imageUri, setImageUri] = useState<string | undefined>();
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      const stored = await loadProducts();
      setProducts(stored);
      setReady(true);
    }

    bootstrap();
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    saveProducts(products);
  }, [products, ready]);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(term);
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesName && matchesCategory;
    });
  }, [products, search, categoryFilter]);

  function resetForm() {
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setBrand('');
    setCategory(Category.STATIONERY);
    setImageUri(undefined);
  }

  async function handlePickImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert('Permissão necessária', 'Autorize o acesso à galeria para escolher uma imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.6,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (result.canceled || !result.assets[0]) {
      return;
    }

    const asset = result.assets[0];

    if (asset.base64) {
      const mime = asset.mimeType ?? 'image/jpeg';
      setImageUri(`data:${mime};base64,${asset.base64}`);
      return;
    }

    setImageUri(asset.uri);
  }

  function handleAdd() {
    const trimmedName = name.trim();
    const quantityNumber = Number(quantity.replace(',', '.'));
    const priceNumber = Number(price.replace(',', '.'));

    if (!trimmedName) {
      Alert.alert('Atenção', 'O nome do produto é obrigatório.');
      return;
    }

    if (!category) {
      Alert.alert('Atenção', 'A categoria do produto é obrigatória.');
      return;
    }

    if (quantity.trim() === '' || Number.isNaN(quantityNumber) || quantityNumber < 0) {
      Alert.alert('Atenção', 'Informe uma quantidade válida igual ou maior que zero.');
      return;
    }

    if (price.trim() === '' || Number.isNaN(priceNumber) || priceNumber < 0) {
      Alert.alert('Atenção', 'Informe um preço válido igual ou maior que zero.');
      return;
    }

    const newProduct: Product = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: trimmedName,
      description: description.trim(),
      price: priceNumber,
      quantity: quantityNumber,
      category,
      brand: brand.trim() || undefined,
      imageUri,
    };

    setProducts((current) => [newProduct, ...current]);
    resetForm();
    Keyboard.dismiss();
  }

  function handleRemove(id: string) {
    Alert.alert('Remover produto', 'Deseja remover este produto da lista?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => setProducts((current) => current.filter((product) => product.id !== id)),
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Meus produtos</Text>
          <Text style={styles.subtitle}>Cadastre e encontre seus itens</Text>
        </View>

        <View style={styles.formCard}>
          <Input
            label="Nome do produto"
            placeholder="Ex: Caderno universitário"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Descrição"
            placeholder="Ex: 200 folhas, capa dura"
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.row}>
            <CategoryPicker label="Categoria" value={category} onChange={setCategory} />
            <Input
              label="Quantidade"
              placeholder="0"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Input
              label="Preço"
              placeholder="0,00"
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
            <Input
              label="Marca (opcional)"
              placeholder="Ex: Bic"
              value={brand}
              onChangeText={setBrand}
            />
          </View>

          <View style={styles.imageRow}>
            {imageUri ? <Image source={{ uri: imageUri }} style={styles.imagePreview} /> : null}
            <TouchableOpacity style={styles.imageButton} onPress={handlePickImage} activeOpacity={0.8}>
              <ImagePlus size={18} color={colors.primary} />
              <Text style={styles.imageButtonText}>
                {imageUri ? 'Trocar imagem' : 'Adicionar imagem'}
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Cadastrar produto"
            onPress={handleAdd}
            icon={
              <View style={styles.iconCircle}>
                <Plus size={14} color={colors.white} />
              </View>
            }
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Buscar produtos</Text>

          <View style={styles.searchBox}>
            <Search size={18} color={colors.textSecondary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar pelo nome..."
              placeholderTextColor="#9A93B0"
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
            <Chip label="Todas" isActive={categoryFilter === 'all'} onPress={() => setCategoryFilter('all')} />
            {CATEGORIES.map((item) => (
              <Chip
                key={item}
                label={CATEGORY_LABELS[item]}
                isActive={categoryFilter === item}
                onPress={() => setCategoryFilter(item)}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Produtos cadastrados ({filteredProducts.length})
          </Text>

          {filteredProducts.length === 0 ? (
            <Text style={styles.empty}>
              {products.length === 0
                ? 'Nenhum produto cadastrado ainda.'
                : 'Nenhum produto corresponde à busca.'}
            </Text>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} onRemove={() => handleRemove(product.id)} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
