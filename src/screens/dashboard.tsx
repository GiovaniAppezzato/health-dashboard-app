import { useQuery } from '@tanstack/react-query';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BiomarkersSection } from '@/components/dashboard/biomarkers-section';
import { DashboardSkeleton } from '@/components/dashboard/dashboard-skeleton';
import { LastMeasurementCard } from '@/components/dashboard/last-measurement-card';
import { RecommendationsSection } from '@/components/dashboard/recommendations-section';
import HealthSnapshotService from '@/services/api/health-snapshot';
import { queryKeys } from '@/services/query-keys';

export function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const {
    data: latestHealthSnapshot,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: queryKeys.healthSnapshots.latest,
    queryFn: HealthSnapshotService.getLatestHealthSnapshot,
  });

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{
        paddingTop: insets.top + 16,
        paddingHorizontal: 20,
        paddingBottom: 32,
      }}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      showsVerticalScrollIndicator={false}
    >
      {isLoading ? (
        <DashboardSkeleton />
      ) : !latestHealthSnapshot ? (
        <View className="flex-1 items-center justify-center py-24">
          <Text className="font-inter-bold text-lg text-gray-900">
            Não encontramos nada aqui
          </Text>
          <Text className="mt-2 text-center font-inter text-sm text-gray-400">
            Cadastre seus biomarcadores para começar.
          </Text>
        </View>
      ) : (
        <>
          <View className="mb-1 flex-row items-start justify-between">
            <Text className="flex-1 font-inter-bold text-[26px] text-gray-900">
              Bem-vindo! 👋
            </Text>
          </View>

          <Text className="mb-[22px] font-inter text-sm text-gray-400">
            Aqui está o seu resumo de hoje.
          </Text>

          <LastMeasurementCard measuredAt={latestHealthSnapshot.measured_at} />
          <BiomarkersSection healthSnapshot={latestHealthSnapshot} />
          <RecommendationsSection
            recommendations={latestHealthSnapshot.recommendations}
          />
        </>
      )}
    </ScrollView>
  );
}
