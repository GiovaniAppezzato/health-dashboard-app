import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '@/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Recommendation'>;

export function RecommendationScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  
  const { content } = route.params;

  return (
    <View className="flex-1 bg-white">
      <View className="px-5" style={{ paddingTop: insets.top + 12 }}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={26} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-1 flex-row items-start justify-between">
          <Text className="flex-1 font-inter-bold text-[26px] text-gray-900">
            Recomendação
          </Text>
        </View>

        <Text className="mb-[22px] font-inter text-sm text-gray-400">
          Veja com detalhes a recomendação.
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
