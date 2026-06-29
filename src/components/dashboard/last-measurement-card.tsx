import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeartIllustration } from './heart-illustration';

export function LastMeasurementCard() {
  return (
    <View className="bg-violet-100 rounded-3xl p-5 mb-7 flex-row items-center">
      <View className="flex-1">
        <View className="flex-row items-center gap-1.5 mb-2.5">
          <Ionicons 
            name="calendar-outline" 
            size={18} 
            color="#111827" 
          />
          <Text className="font-inter-medium text-sm text-gray-900">
            Última medição
          </Text>
        </View>

        <Text className="font-inter-bold text-3xl text-gray-900 leading-9">
          Hoje, 08:30
        </Text>

        <Text className="font-inter-medium text-sm text-gray-900 mt-2">
          26 de junho de 2026
        </Text>
      </View>

      <HeartIllustration />
    </View>
  );
}