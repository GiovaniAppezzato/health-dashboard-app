import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LastMeasurementCard } from '@/components/dashboard/last-measurement-card';
import { BiomarkersSection } from '@/components/dashboard/biomarkers-section';
import { RecommendationsSection } from '@/components/dashboard/recommendations-section';
import { DashboardSkeleton } from '@/components/dashboard/dashboard-skeleton';

export function DashboardScreen() {
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
        <DashboardSkeleton />
      ) : (
        <>
          <View className="flex-row justify-between items-start mb-1">
            <Text className="font-inter-bold text-[26px] text-gray-900 flex-1">
              Bem-vindo! 👋
            </Text>
          </View>

          <Text className="font-inter text-sm text-gray-400 mb-[22px]">
            Aqui está o seu resumo de hoje.
          </Text>

          <LastMeasurementCard />
          <BiomarkersSection />
          <RecommendationsSection />
        </>
      )}
    </ScrollView>
  );
}
