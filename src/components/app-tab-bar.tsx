import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';

import { TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#6544f6';
const MUTED = '#6f737a';
const CENTER_BUTTON_SIZE = 52;

type TabRoute = 'Dashboard' | 'HealthSnapshotEntry' | 'History';

export function AppTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeRoute = state.routeNames[state.index] as TabRoute;

  function navigate(routeName: TabRoute) {
    navigation.navigate(routeName);
  }

  const isDashboardActive = activeRoute === 'Dashboard';
  const isHistoryActive = activeRoute === 'History';

  return (
    <View
      className="bg-white border-t border-zinc-200"
      style={{ paddingBottom: insets.bottom, overflow: 'visible' }}
    >
      <View className="flex-row h-[66px] items-center px-4">
        <TouchableOpacity
          className="flex-1 items-center justify-center gap-1"
          onPress={() => navigate('Dashboard')}
          activeOpacity={0.7}
        >
          <Octicons
            name={isDashboardActive ? 'home-fill' : 'home'}
            size={22}
            color={isDashboardActive ? PRIMARY : MUTED}
          />
          <Text
            className="font-inter-medium text-[11px]"
            style={{ color: isDashboardActive ? PRIMARY : MUTED }}
          >
            Início
          </Text>
        </TouchableOpacity>

        <View className="flex-1" />

        <TouchableOpacity
          className="flex-1 items-center justify-center gap-1"
          onPress={() => navigate('History')}
          activeOpacity={0.7}
        >
          <Octicons
            name="clock"
            size={22}
            color={isHistoryActive ? PRIMARY : MUTED}
          />
          <Text
            className="font-inter-medium text-[11px]"
            style={{ color: isHistoryActive ? PRIMARY : MUTED }}
          >
            Histórico
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: 'absolute',
          top: -(CENTER_BUTTON_SIZE / 2),
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigate('HealthSnapshotEntry')}
          activeOpacity={0.85}
          style={{
            width: CENTER_BUTTON_SIZE,
            height: CENTER_BUTTON_SIZE,
            borderRadius: CENTER_BUTTON_SIZE / 2,
            backgroundColor: PRIMARY,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: PRIMARY,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.35,
            shadowRadius: 10,
            elevation: 8,
          }}
        >
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
