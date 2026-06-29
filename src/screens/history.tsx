import { useInfiniteQuery } from '@tanstack/react-query';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { HistoryList } from '@/components/history/history-list';
import { HistorySkeleton } from '@/components/history/history-skeleton';
import { RootStackParamList } from '@/routes';
import HealthSnapshotService from '@/services/api/health-snapshot';
import { queryKeys } from '@/services/query-keys';

export function HistoryScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    data: healthSnapshots = [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: queryKeys.healthSnapshots.list,
    queryFn: ({ pageParam }) =>
      HealthSnapshotService.getHealthSnapshots({ page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { current_page, last_page } = lastPage.meta;

      return current_page < last_page ? current_page + 1 : undefined;
    },
    select: (data) => data.pages.flatMap((page) => page.data),
  });

  function handleEndReached() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  const contentContainerStyle = {
    paddingTop: insets.top + 16,
    paddingHorizontal: 20,
    paddingBottom: 60,
  };

  if (isLoading) {
    return (
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <HistorySkeleton />
      </ScrollView>
    );
  }

  return (
    <HistoryList
      contentContainerStyle={contentContainerStyle}
      data={healthSnapshots}
      isFetchingNextPage={isFetchingNextPage}
      isRefetching={isRefetching}
      onEndReached={handleEndReached}
      onRefresh={refetch}
      onPressItem={(id) => navigation.navigate('Recommendations', { id })}
    />
  );
}
