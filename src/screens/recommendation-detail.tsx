import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '@/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'RecommendationDetail'>;

export function RecommendationDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { content } = route.params;

  return (
    <View className="flex-1 bg-white">
      <View className="px-5" style={{ paddingTop: insets.top + 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="flex-1 font-inter-bold text-[26px] text-gray-900 mb-4">
          Recomendação
        </Text>

        <Text
          className="font-inter text-base text-gray-700"
          style={{ lineHeight: 26 }}
        >
          {content}
        </Text>
      </ScrollView>
    </View>
  );
}
