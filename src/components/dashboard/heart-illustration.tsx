import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function HeartIllustration() {
  return (
    <View className="w-[110px] h-[100px] items-center justify-center">
      <View
        className="absolute bottom-1 w-16 h-4 bg-primary/20 rounded-full"
        style={{ transform: [{ scaleX: 1.5 }] }}
      />

      <Ionicons name="heart" size={74} color="#6544f6" />

      <Text className="absolute top-0.5 right-1.5 text-[20px] text-violet-400" style={{ lineHeight: 24 }}>
        ✦
      </Text>
      <Text className="absolute top-[22px] left-0.5 text-[10px] text-violet-300" style={{ lineHeight: 12 }}>
        ✦
      </Text>
      <Text className="absolute bottom-3.5 right-0 text-[13px] text-violet-700" style={{ lineHeight: 16 }}>
        ✦
      </Text>
    </View>
  );
}