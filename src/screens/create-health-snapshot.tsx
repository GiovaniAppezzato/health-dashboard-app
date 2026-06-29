import { Pressable, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Control, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RootStackParamList } from '@/routes';
import {
  createHealthSnapshotSchema,
  CreateHealthSnapshotFormValues,
} from '@/schemas/create-health-snapshot';

type Props = NativeStackScreenProps<RootStackParamList, 'HealthSnapshotEntry'>;

export function CreateHealthSnapshotScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateHealthSnapshotFormValues>({
    resolver: yupResolver(createHealthSnapshotSchema),
    defaultValues: {
      sleep_hours: '',
      glucose_level: '',
      heart_rate: '',
      water_intake: '',
    },
  });

  function onSubmit(data: CreateHealthSnapshotFormValues) {
    console.log(data);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="flex-1 bg-black/50 justify-end">
      <Pressable className="flex-1" onPress={() => navigation.goBack()} />

      <View
        className="bg-white rounded-t-3xl"
        style={{ paddingBottom: insets.bottom + 16 }}
      >
        <View className="items-center pt-3 pb-1">
          <View className="w-10 h-1 rounded-full bg-zinc-300" />
        </View>

        <View className="flex-row items-start justify-between px-5 pt-4 pb-1">
          <View className="flex-1">
            <Text className="font-inter-bold text-[22px] text-gray-900">
              Novo registro
            </Text>
            <Text className="font-inter text-sm text-gray-400 mt-0.5">
              Informe seus biomarcadores de hoje.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            className="ml-3 mt-0.5"
          >
            <Ionicons name="close" size={22} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        <View className="px-5 mt-2">
          <FormRow
            icon={<Ionicons name="moon" size={18} color="#6544f6" />}
            iconBgClassName="bg-violet-100"
            label="Horas de sono"
            unit="horas"
            name="sleep_hours"
            control={control}
            error={errors.sleep_hours?.message}
          />
          <View className="h-px bg-zinc-100" />
          <FormRow
            icon={<Ionicons name="water" size={18} color="#16a34a" />}
            iconBgClassName="bg-green-100"
            label="Nível de glicose"
            unit="mg/dL"
            name="glucose_level"
            control={control}
            error={errors.glucose_level?.message}
          />
          <View className="h-px bg-zinc-100" />
          <FormRow
            icon={<Ionicons name="heart" size={18} color="#ef4444" />}
            iconBgClassName="bg-red-100"
            label="Frequência cardíaca (HR)"
            unit="bpm"
            name="heart_rate"
            control={control}
            error={errors.heart_rate?.message}
          />
          <View className="h-px bg-zinc-100" />
          <FormRow
            icon={<Ionicons name="water-outline" size={18} color="#3b82f6" />}
            iconBgClassName="bg-blue-100"
            label="Consumo de água"
            unit="litros"
            name="water_intake"
            control={control}
            error={errors.water_intake?.message}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.85}
          className="mx-5 mt-6 py-4 bg-primary rounded-2xl items-center"
        >
          <Text className="font-inter-semibold text-white text-base">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

type FormRowProps = {
  icon: React.ReactNode;
  iconBgClassName: string;
  label: string;
  unit: string;
  name: keyof CreateHealthSnapshotFormValues;
  control: Control<CreateHealthSnapshotFormValues>;
  error?: string;
};

function FormRow({ icon, iconBgClassName, label, unit, name, control, error }: FormRowProps) {
  const hasError = Boolean(error);

  return (
    <View className="flex-row items-center py-4">
      <View className={`w-10 h-10 rounded-full items-center justify-center ${iconBgClassName}`}>
        {icon}
      </View>

      <Text className="font-inter text-sm text-gray-700 ml-3 flex-1">
        {label}
      </Text>

      <View className="items-end">
        <View className="flex-row items-baseline gap-1.5">
          <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="decimal-pad"
                maxLength={6}
                placeholder="0"
                placeholderTextColor="#d1d5db"
                style={{
                  fontFamily: 'Inter_700Bold',
                  fontSize: 17,
                  color: hasError ? '#ef4444' : '#111827',
                  textAlign: 'right',
                  minWidth: 36,
                }}
              />
            )}
          />
          <Text className="font-inter text-sm text-gray-400 w-12">{unit}</Text>
        </View>

        {hasError ? (
          <Text className="font-inter text-[11px] text-red-500 mt-0.5 text-right">
            {error}
          </Text>
        ) : null}
      </View>
    </View>
  );
}
