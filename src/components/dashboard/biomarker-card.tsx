import React from 'react';
import { View, Text } from 'react-native';

export type BiomarkerCardProps = {
  icon: React.ReactNode;
  iconBgClassName: string;
  label: string;
  value: string;
  unit: string;
};

export function BiomarkerCard({
  icon,
  iconBgClassName,
  label,
  value,
  unit,
}: BiomarkerCardProps) {
  return (
    <View
      className="flex-1 bg-white rounded-[18px] border border-zinc-100 p-4 shadow-sm"
      style={{ elevation: 1 }}
    >
      <View className={`w-[42px] h-[42px] rounded-full items-center justify-center ${iconBgClassName}`}>
        {icon}
      </View>

      <Text className="font-inter text-xs text-gray-400 mt-2.5 leading-4">
        {label}
      </Text>

      <View className="flex-row items-baseline mt-1.5 gap-[3px]">
        <Text className="font-inter-bold text-[28px] text-gray-900" style={{ lineHeight: 34 }}>
          {value}
        </Text>
        <Text className="font-inter-medium text-[13px] text-gray-500">
          {unit}
        </Text>
      </View>
    </View>
  );
}