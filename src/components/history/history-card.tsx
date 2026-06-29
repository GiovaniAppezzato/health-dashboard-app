import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HistoryEntry } from '@/screens/history';
import { MetricCell } from './metric-cell';

type HistoryCardProps = Omit<HistoryEntry, 'id'>;

export function HistoryCard({ date, time, sleep, glucose, heartRate, water }: HistoryCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-white rounded-2xl border border-zinc-100 p-4"
    >
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-inter-bold text-[15px] text-gray-900">
          {date}
        </Text>
        <Text className="font-inter text-sm text-gray-400">
          {time}
        </Text>
      </View>

      <View className="h-px bg-zinc-100 mb-3" />

      <View className="flex-row items-center">
        <MetricCell
          icon={<Ionicons name="moon" size={22} color="#6544f6" />}
          value={sleep}
          unit="h"
        />
        <View className="w-px h-10 bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="water" size={22} color="#16a34a" />}
          value={glucose}
          unit="mg/dL"
        />
        <View className="w-px h-10 bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="heart" size={22} color="#ef4444" />}
          value={heartRate}
          unit="bpm"
        />
        <View className="w-px h-10 bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="water-outline" size={22} color="#3b82f6" />}
          value={water}
          unit="L"
        />
        <View className="ml-3">
          <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
        </View>
      </View>
    </TouchableOpacity>
  );
}