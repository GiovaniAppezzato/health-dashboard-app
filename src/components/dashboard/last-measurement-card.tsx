import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { HeartIllustration } from './heart-illustration';
import { formatMeasurementDate } from '@/utils/format';

type LastMeasurementCardProps = {
  measuredAt: string;
};

export function LastMeasurementCard({ measuredAt }: LastMeasurementCardProps) {
  const { summaryLabel } = formatMeasurementDate(measuredAt);

  return (
    <View className="mb-7 flex-row items-center rounded-3xl bg-violet-100 p-5">
      <View className="flex-1">
        <View className="mb-2.5 flex-row items-center gap-1.5">
          <Ionicons name="calendar-outline" size={18} color="#111827" />
          <Text className="font-inter-medium text-sm text-gray-900">
            Última medição
          </Text>
        </View>

        <Text className="font-inter-bold text-3xl leading-9 text-gray-900">
          {summaryLabel}
        </Text>
      </View>

      <HeartIllustration />
    </View>
  );
}
