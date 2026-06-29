import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { Text, TouchableOpacity, View } from 'react-native';

import { MetricCell } from './metric-cell';
import { HealthSnapshot } from '@/interfaces/health-snapshot';
import { formatDecimal } from '@/utils/format';

type HistoryCardProps = {
  healthSnapshot: HealthSnapshot;
};

function formatHistoryDate(measuredAt: string) {
  const date = moment(measuredAt, 'YYYY-MM-DD', true).locale('pt-br');

  if (!date.isValid()) {
    return measuredAt;
  }

  return date.format('D [de] MMM. [de] YYYY');
}

export function HistoryCard({ healthSnapshot }: HistoryCardProps) {
  const dateLabel = formatHistoryDate(healthSnapshot.measured_at);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="rounded-2xl border border-zinc-100 bg-white p-4"
    >
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="font-inter-bold text-[15px] text-gray-900">
          {dateLabel}
        </Text>
      </View>

      <View className="mb-3 h-px bg-zinc-100" />

      <View className="flex-row items-center">
        <MetricCell
          icon={<Ionicons name="moon" size={22} color="#6544f6" />}
          value={formatDecimal(healthSnapshot.sleep_hours)}
          unit="h"
        />
        <View className="h-10 w-px bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="water" size={22} color="#16a34a" />}
          value={String(healthSnapshot.glucose_level)}
          unit="mg/dL"
        />
        <View className="h-10 w-px bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="heart" size={22} color="#ef4444" />}
          value={String(healthSnapshot.heart_rate)}
          unit="bpm"
        />
        <View className="h-10 w-px bg-zinc-100" />
        <MetricCell
          icon={<Ionicons name="water-outline" size={22} color="#3b82f6" />}
          value={formatDecimal(healthSnapshot.water_intake)}
          unit="L"
        />
        <View className="ml-3">
          <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
