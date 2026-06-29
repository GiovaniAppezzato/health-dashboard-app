import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
 
import { BiomarkerCard } from './biomarker-card';
import { formatDecimal } from '@/utils/format';
import { HealthSnapshot } from '@/interfaces/health-snapshot';

type BiomarkersSectionProps = {
  healthSnapshot: HealthSnapshot;
};

export function BiomarkersSection({ healthSnapshot }: BiomarkersSectionProps) {
  return (
    <>
      <Text className="mb-3.5 font-inter-bold text-lg text-gray-900">
        Seus biomarcadores
      </Text>

      <View className="mb-3 flex-row gap-3">
        <BiomarkerCard
          icon={<Ionicons name="moon" size={20} color="#6544f6" />}
          iconBgClassName="bg-violet-100"
          label="Horas de sono"
          value={formatDecimal(healthSnapshot.sleep_hours)}
          unit="h"
        />
        <BiomarkerCard
          icon={<Ionicons name="water" size={20} color="#16a34a" />}
          iconBgClassName="bg-green-100"
          label="Nível de glicose"
          value={String(healthSnapshot.glucose_level)}
          unit="mg/dL"
        />
      </View>

      <View className="mb-7 flex-row gap-3">
        <BiomarkerCard
          icon={<Ionicons name="heart" size={20} color="#ef4444" />}
          iconBgClassName="bg-red-100"
          label="Frequência cardíaca (HR)"
          value={String(healthSnapshot.heart_rate)}
          unit="bpm"
        />
        <BiomarkerCard
          icon={<Ionicons name="water-outline" size={20} color="#3b82f6" />}
          iconBgClassName="bg-blue-100"
          label="Consumo de água"
          value={formatDecimal(healthSnapshot.water_intake)}
          unit="L"
        />
      </View>
    </>
  );
}
