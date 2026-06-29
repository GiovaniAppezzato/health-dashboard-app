import { ActivityIndicator, FlatList, StyleProp, Text, View, ViewStyle } from 'react-native';

import { HistoryCard } from './history-card';
import { HealthSnapshot } from '@/interfaces/health-snapshot';

type HistoryListProps = {
  data: HealthSnapshot[];
  contentContainerStyle: StyleProp<ViewStyle>;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
  onEndReached: () => void;
  onRefresh: () => void;
  onPressItem: (id: number) => void;
};

export function HistoryList({
  contentContainerStyle,
  data,
  isFetchingNextPage,
  isRefetching,
  onEndReached,
  onRefresh,
  onPressItem,
}: HistoryListProps) {
  return (
    <FlatList
      className="flex-1 bg-white"
      contentContainerStyle={contentContainerStyle}
      data={data}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={
        <View className="items-center justify-center py-24">
          <Text className="font-inter-bold text-lg text-gray-900">
            Nenhum registro encontrado.
          </Text>
          <Text className="mt-2 text-center font-inter text-sm text-gray-400">
            Seus registros aparecerao aqui quando forem cadastrados.
          </Text>
        </View>
      }
      ListFooterComponent={
        isFetchingNextPage ? (
          <View className="py-4">
            <ActivityIndicator color="#6544f6" />
          </View>
        ) : null
      }
      ListHeaderComponent={
        <View>
          <View className="mb-1 flex-row items-start justify-between">
            <Text className="flex-1 font-inter-bold text-[26px] text-gray-900">
              Histórico
            </Text>
          </View>

          <Text className="mb-[22px] font-inter text-sm text-gray-400">
            Acompanhe seus registros.
          </Text>
        </View>
      }
      ItemSeparatorComponent={() => <View className="h-4" />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.35}
      onRefresh={onRefresh}
      refreshing={isRefetching}
      renderItem={({ item }) => (
        <HistoryCard healthSnapshot={item} onPress={() => onPressItem(item.id)} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
