import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DashboardScreen } from '@/screens/dashboard';
import { CreateHealthSnapshotScreen } from '@/screens/create-health-snapshot';
import { HistoryScreen } from '@/screens/history';
import { RecommendationDetailScreen } from '@/screens/recommendation-detail';
import { AppTabBar } from '@/components/app-tab-bar';

export type TabRoutesParamList = {
  Dashboard: undefined;
  History: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  HealthSnapshotEntry: undefined;
  RecommendationDetail: { content: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabRoutesParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen
          name="HealthSnapshotEntry"
          component={CreateHealthSnapshotScreen}
          options={{ presentation: 'transparentModal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name="RecommendationDetail" component={RecommendationDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
