import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

function usePulseOpacity() {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1,   duration: 700, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.4, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, [opacity]);

  return opacity;
}

export function HistorySkeleton() {
  const opacity = usePulseOpacity();

  return (
    <Animated.View style={{ opacity }}>
      <View className="h-9 w-36 rounded-lg bg-zinc-200 mb-1" />
      <View className="h-4 w-64 rounded-md bg-zinc-200 mb-6" />

      <View className="gap-4">
        {[0, 1, 2].map((i) => (
          <View key={i} className="bg-white rounded-2xl border border-zinc-100 p-4">
            <View className="flex-row justify-between items-center mb-3">
              <View className="h-4 w-48 rounded bg-zinc-200" />
              <View className="h-3 w-10 rounded bg-zinc-200" />
            </View>

            <View className="h-px bg-zinc-100 mb-3" />

            <View className="flex-row items-center">
              {[0, 1, 2, 3].map((j) => (
                <React.Fragment key={j}>
                  <View className="flex-1 items-center gap-1.5">
                    <View className="w-[22px] h-[22px] rounded-full bg-zinc-200" />
                    <View className="h-4 w-8 rounded bg-zinc-200" />
                    <View className="h-3 w-10 rounded bg-zinc-200" />
                  </View>
                  {j < 3 && <View className="w-px h-10 bg-zinc-100" />}
                </React.Fragment>
              ))}
              <View className="ml-3 w-[18px] h-[18px] rounded bg-zinc-200" />
            </View>
          </View>
        ))}
      </View>
    </Animated.View>
  );
}
