import moment from 'moment';
import 'moment/locale/pt-br';

export function formatDecimal(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
  }).format(value);
}

export function formatMeasurementDate(measuredAt: string): string {
  const date = moment(measuredAt, 'YYYY-MM-DD', true).locale('pt-br');

  return date.isValid() ? date.format('D [de] MMMM [de] YYYY') : measuredAt;
}
