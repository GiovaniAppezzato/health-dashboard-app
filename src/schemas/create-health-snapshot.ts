import * as yup from 'yup';

function toNumber(value: string | undefined) {
  return parseFloat((value ?? '').replace(',', '.'));
}

function numberField(min: number, max: number, label: string) {
  return yup
    .string()
    .required('Campo obrigatório')
    .test('valid-range', '', (value, ctx) => {
      const n = toNumber(value);

      if (isNaN(n)) return ctx.createError({ message: 'Insira um número válido' });
      if (n < min || n > max) return ctx.createError({ message: `Insira um valor entre ${min} e ${max} ${label}` });

      return true;
    });
}

export const createHealthSnapshotSchema = yup.object({
  sleep_hours:   numberField(0,  24,  'horas'),
  glucose_level: numberField(0,  600, 'mg/dL'),
  heart_rate:    numberField(30, 250, 'bpm'),
  water_intake:  numberField(0,  20,  'litros'),
});

export type CreateHealthSnapshotFormValues = yup.InferType<typeof createHealthSnapshotSchema>;