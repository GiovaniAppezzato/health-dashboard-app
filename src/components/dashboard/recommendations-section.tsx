import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RecommendationItem } from './recommendation-item';

export function RecommendationsSection() {
  return (
    <>
      <Text className="font-inter-bold text-lg text-gray-900 mb-3.5">
        Recomendações para você
      </Text>

      <View className="gap-2.5">
        <RecommendationItem
          iconBgClassName="bg-green-100"
          icon={<MaterialCommunityIcons name="cup-water" size={22} color="#16a34a" />}
          text="Continue mantendo sua hidratação ao longo do dia."
        />
        <RecommendationItem
          iconBgClassName="bg-violet-100"
          icon={<Ionicons name="moon" size={20} color="#6544f6" />}
          text={"Seu sono está em um bom nível.\nMantenha sua rotina consistente."}
        />
        <RecommendationItem
          iconBgClassName="bg-red-100"
          icon={<Ionicons name="heart" size={20} color="#ef4444" />}
          text={"Sua frequência cardíaca está ótima.\nContinue com hábitos saudáveis."}
        />
      </View>
    </>
  );
}