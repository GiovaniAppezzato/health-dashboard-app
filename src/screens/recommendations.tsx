import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BiomarkersSection } from '@/components/dashboard/biomarkers-section';
import { RecommendationsSection } from '@/components/dashboard/recommendations-section';
import { RootStackParamList } from '@/routes';
import HealthSnapshotService from '@/services/api/health-snapshot';
import { queryKeys } from '@/services/query-keys';

type Props = NativeStackScreenProps<RootStackParamList, 'Recommendations'>;

export function RecommendationsScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { id } = route.params;

  const { data: healthSnapshot, isLoading } = useQuery({
    queryKey: queryKeys.healthSnapshots.detail(id),
    queryFn: () => HealthSnapshotService.getHealthSnapshot(id),
  });

  const dateLabel = healthSnapshot
    ? moment(healthSnapshot.measured_at, 'YYYY-MM-DD', true)
        .locale('pt-br')
        .format('D [de] MMMM [de] YYYY')
    : '';

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: insets.top + 12, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} className="mb-4">
        <Ionicons name="arrow-back" size={26} color="#111827" />
      </TouchableOpacity>

      <View className="mb-1 flex-row items-start justify-between">
        <Text className="flex-1 font-inter-bold text-[26px] text-gray-900">
          {dateLabel}
        </Text>
      </View>

        <Text className="mb-[22px] font-inter text-sm text-gray-400">
          Biomarcadores e recomendações do registro.
        </Text>

        {isLoading ? (
          <View className="flex-1 items-center justify-center py-24">
            <ActivityIndicator color="#6544f6" />
          </View>
        ) : !healthSnapshot ? (
          <View className="flex-1 items-center justify-center py-24">
            <Text className="font-inter-bold text-lg text-gray-900">
              Registro não encontrado.
            </Text>
          </View>
        ) : (
          <>
            <BiomarkersSection healthSnapshot={healthSnapshot} />
            <RecommendationsSection recommendations={healthSnapshot.recommendations} />
          </>
        )}
    </ScrollView>
  );
}
