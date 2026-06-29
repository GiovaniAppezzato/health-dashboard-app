import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BiomarkerCard } from './biomarker-card';

export function BiomarkersSection() {
  return (
    <>
      <Text className="font-inter-bold text-lg text-gray-900 mb-3.5">
        Seus biomarcadores
      </Text>

      <View className="flex-row gap-3 mb-3">
        <BiomarkerCard
          icon={<Ionicons name="moon" size={20} color="#6544f6" />}
          iconBgClassName="bg-violet-100"
          label="Horas de sono"
          value="7,4"
          unit="h"
        />
        <BiomarkerCard
          icon={<Ionicons name="water" size={20} color="#16a34a" />}
          iconBgClassName="bg-green-100"
          label="Nível de glicose"
          value="98"
          unit="mg/dL"
        />
      </View>

      <View className="flex-row gap-3 mb-7">
        <BiomarkerCard
          icon={<Ionicons name="heart" size={20} color="#ef4444" />}
          iconBgClassName="bg-red-100"
          label="Frequência cardíaca (HR)"
          value="62"
          unit="bpm"
        />
        <BiomarkerCard
          icon={<Ionicons name="water-outline" size={20} color="#3b82f6" />}
          iconBgClassName="bg-blue-100"
          label="Consumo de água"
          value="1,8"
          unit="L"
        />
      </View>
    </>
  );
}