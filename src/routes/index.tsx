import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DashboardScreen } from '@/screens/dashboard';
import { HealthSnapshotEntryScreen } from '@/screens/health-snapshot-entry';
import { HistoryScreen } from '@/screens/history';

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
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6842FF',
          tabBarInactiveTintColor: '#71717A',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="HealthSnapshotEntry"
          component={HealthSnapshotEntryScreen}
          options={{ title: 'Novo registro' }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'Histórico' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
