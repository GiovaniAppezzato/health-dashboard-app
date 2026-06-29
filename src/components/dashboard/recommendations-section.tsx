import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { RecommendationItem } from './recommendation-item';
import { Recommendation } from '@/interfaces/health-snapshot';

type RecommendationsSectionProps = {
  recommendations: Recommendation[];
};

type IconConfig = {
  iconBgClassName: string;
  icon: React.ReactNode;
};

const RECOMMENDATION_ICONS: IconConfig[] = [
  {
    iconBgClassName: 'bg-green-100',
    icon: <MaterialCommunityIcons name="cup-water" size={22} color="#16a34a" />,
  },
  {
    iconBgClassName: 'bg-violet-100',
    icon: <Ionicons name="moon" size={20} color="#6544f6" />,
  },
  {
    iconBgClassName: 'bg-red-100',
    icon: <Ionicons name="heart" size={20} color="#ef4444" />,
  },
];

export function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <>
      <Text className="mb-3.5 font-inter-bold text-lg text-gray-900">
        Recomendações para você
      </Text>

      <View className="gap-2.5">
        {recommendations.map((recommendation, index) => {
          const iconConfig = RECOMMENDATION_ICONS[index % RECOMMENDATION_ICONS.length];

          return (
            <RecommendationItem
              key={`${recommendation.position}-${recommendation.content}`}
              iconBgClassName={iconConfig.iconBgClassName}
              icon={iconConfig.icon}
              text={recommendation.content}
            />
          );
        })}
      </View>
    </>
  );
}