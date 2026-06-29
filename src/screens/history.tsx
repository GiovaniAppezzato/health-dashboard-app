import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HistorySkeleton } from '@/components/history/history-skeleton';
import { HistoryList } from '@/components/history/history-list';

export type HistoryEntry = {
  id: string;
  date: string;
  time: string;
  sleep: string;
  glucose: string;
  heartRate: string;
  water: string;
};

const HISTORY_DATA: HistoryEntry[] = [
  { id: '1', date: 'Hoje, 26 de jun. de 2026',  time: '08:30', sleep: '7,4', glucose: '98',  heartRate: '62', water: '1,8' },
  { id: '2', date: 'Ontem, 25 de jun. de 2026', time: '08:15', sleep: '6,8', glucose: '105', heartRate: '68', water: '1,5' },
  { id: '3', date: '24 de jun. de 2026',         time: '07:50', sleep: '7,1', glucose: '92',  heartRate: '60', water: '2,0' },
  { id: '4', date: '23 de jun. de 2026',         time: '08:10', sleep: '6,5', glucose: '110', heartRate: '72', water: '1,6' },
  { id: '5', date: '22 de jun. de 2026',         time: '08:00', sleep: '7,8', glucose: '95',  heartRate: '61', water: '1,9' },
];

export function HistoryScreen() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{
        paddingTop: insets.top + 16,
        paddingHorizontal: 20,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      {isLoading ? (
        <HistorySkeleton />
      ) : (
        <>
          <View className="flex-row justify-between items-start mb-1">
            <Text className="font-inter-bold text-[26px] text-gray-900 flex-1">
              Histórico
            </Text>
          </View>

          <Text className="font-inter text-sm text-gray-400 mb-[22px]">
            Acompanhe seus registros.
          </Text>

          <HistoryList data={HISTORY_DATA} />
        </>
      )}
    </ScrollView>
  );
}