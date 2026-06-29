import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

function usePulseOpacity() {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return opacity;
}

export function DashboardSkeleton() {
  const opacity = usePulseOpacity();

  return (
    <Animated.View style={{ opacity }}>
      <View className="flex-row justify-between items-start mb-1">
        <View className="h-8 w-48 rounded-lg bg-zinc-200" />
      </View>
      <View className="h-4 w-60 rounded-md bg-zinc-200 mb-[22px]" />

      <View className="bg-violet-100 rounded-3xl p-5 mb-7 flex-row items-center">
        <View className="flex-1 gap-2">
          <View className="h-4 w-28 rounded-md bg-violet-200" />
          <View className="h-9 w-44 rounded-lg bg-violet-200" />
          <View className="h-4 w-36 rounded-md bg-violet-200" />
        </View>
        <View className="w-[100px] h-[90px] rounded-2xl bg-violet-200" />
      </View>

      <View className="h-5 w-44 rounded-md bg-zinc-200 mb-3.5" />

      <View className="flex-row gap-3 mb-3">
        {[0, 1].map((i) => (
          <View
            key={i}
            className="flex-1 bg-white rounded-[18px] border border-zinc-100 p-4"
          >
            <View className="w-[42px] h-[42px] rounded-full bg-zinc-200" />
            <View className="h-3 w-20 rounded bg-zinc-200 mt-2.5" />
            <View className="h-8 w-16 rounded-md bg-zinc-200 mt-1.5" />
            <View className="h-5 w-14 rounded-full bg-zinc-200 mt-2.5" />
          </View>
        ))}
      </View>

      <View className="flex-row gap-3 mb-7">
        {[0, 1].map((i) => (
          <View
            key={i}
            className="flex-1 bg-white rounded-[18px] border border-zinc-100 p-4"
          >
            <View className="w-[42px] h-[42px] rounded-full bg-zinc-200" />
            <View className="h-3 w-20 rounded bg-zinc-200 mt-2.5" />
            <View className="h-8 w-16 rounded-md bg-zinc-200 mt-1.5" />
            <View className="h-5 w-14 rounded-full bg-zinc-200 mt-2.5" />
          </View>
        ))}
      </View>

      <View className="h-5 w-52 rounded-md bg-zinc-200 mb-3.5" />

      <View className="gap-2.5">
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            className="flex-row items-center bg-white rounded-2xl border border-zinc-100 px-4 py-3.5 gap-3.5"
          >
            <View className="w-[46px] h-[46px] rounded-full bg-zinc-200 shrink-0" />
            <View className="flex-1 gap-2">
              <View className="h-3.5 rounded bg-zinc-200 w-full" />
              <View className="h-3.5 rounded bg-zinc-200 w-3/4" />
            </View>
            <View className="w-4 h-4 rounded bg-zinc-200" />
          </View>
        ))}
      </View>
    </Animated.View>
  );
}
