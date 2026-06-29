import React from 'react';
import { View, Text } from 'react-native';

export type MetricCellProps = {
  icon: React.ReactNode;
  value: string;
  unit: string;
};

export function MetricCell({ icon, value, unit }: MetricCellProps) {
  return (
    <View className="flex-1 items-center gap-1">
      {icon}
      <Text className="font-inter-bold text-[15px] text-gray-900">
        {value}
      </Text>
      <Text className="font-inter text-[11px] text-gray-400">
        {unit}
      </Text>
    </View>
  );
}