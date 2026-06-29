import * as yup from 'yup';

import { parseFormNumber } from '@/utils/number';

export type CreateHealthSnapshotFormValues = {
  measured_at: Date;
  sleep_hours: string;
  glucose_level: string;
  heart_rate: string;
  water_intake: string;
};

function numberField(
  min: number,
  max: number,
  label: string,
  options?: { integer?: boolean },
) {
  return yup
    .string()
    .required('Campo obrigatório')
    .test('is-number', 'Insira um número válido', value => {
      return Number.isFinite(parseFormNumber(value));
    })
    .test(
      'is-in-range',
      `Insira um valor entre ${min} e ${max} ${label}`,
      value => {
        const parsedValue = parseFormNumber(value);

        return parsedValue >= min && parsedValue <= max;
      },
    )
    .test('is-integer', 'Insira um número inteiro', value => {
      if (!options?.integer) {
        return true;
      }

      return Number.isInteger(parseFormNumber(value));
    });
}

export const createHealthSnapshotSchema: yup.ObjectSchema<CreateHealthSnapshotFormValues> =
  yup.object({
    measured_at: yup.date().required(),
    sleep_hours: numberField(0, 24, 'hora(s)'),
    glucose_level: numberField(0, 600, 'mg/dL', { integer: true }),
    heart_rate: numberField(30, 250, 'bpm', { integer: true }),
    water_intake: numberField(0, 20, 'litro(s)'),
  });
