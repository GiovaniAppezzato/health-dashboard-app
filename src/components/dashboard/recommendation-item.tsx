import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type RecommendationItemProps = {
  icon: React.ReactNode;
  iconBgClassName: string;
  text: string;
  onPress?: () => void;
};

export function RecommendationItem({ icon, iconBgClassName, text, onPress }: RecommendationItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center bg-white rounded-2xl border border-zinc-100 px-4 py-3.5 gap-3.5"
    >
      <View className={`w-[46px] h-[46px] rounded-full items-center justify-center shrink-0 ${iconBgClassName}`}>
        {icon}
      </View>

      <Text
        className="font-inter text-sm text-gray-700 flex-1"
        style={{ lineHeight: 21 }}
        numberOfLines={2}
      >
        {text}
      </Text>

      <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
    </TouchableOpacity>
  );
}