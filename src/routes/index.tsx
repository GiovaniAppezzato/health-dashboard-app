import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DashboardScreen } from '@/screens/dashboard';
import { HealthSnapshotEntryScreen } from '@/screens/health-snapshot-entry';
import { HistoryScreen } from '@/screens/history';
import { AppTabBar } from '@/components/app-tab-bar';

export type AppRoutesParamList = {
  Dashboard: undefined;
  History: undefined;
  HealthSnapshotEntry: undefined;
};

const Tab = createBottomTabNavigator<AppRoutesParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBar={(props) => <AppTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="HealthSnapshotEntry" component={HealthSnapshotEntryScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
