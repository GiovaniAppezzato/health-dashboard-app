import React from 'react';
import { View } from 'react-native';
import { HistoryEntry } from '@/screens/history';
import { HistoryCard } from './history-card';

type HistoryListProps = {
  data: HistoryEntry[];
};

export function HistoryList({ data }: HistoryListProps) {
  return (
    <View className="gap-4">
      {data.map((item) => (
        <HistoryCard
          key={item.id}
          date={item.date}
          time={item.time}
          sleep={item.sleep}
          glucose={item.glucose}
          heartRate={item.heartRate}
          water={item.water}
        />
      ))}
    </View>
  );
}