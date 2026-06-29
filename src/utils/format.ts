import moment from 'moment';
import 'moment/locale/pt-br';

export function formatDecimal(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
  }).format(value);
}

type MeasurementDate = {
  dateLabel: string;
  summaryLabel: string;
};

export function formatMeasurementDate(measuredAt: string): MeasurementDate {
  const date = moment(measuredAt, ['YYYY-MM-DDTHH:mm:ss', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD'], true).locale('pt-br');

  if (!date.isValid()) {
    return { dateLabel: measuredAt, summaryLabel: 'Última medição' };
  }

  const dateLabel = date.format('D [de] MMMM [de] YYYY');
  const isToday = date.isSame(moment(), 'day');

  if (!isToday) {
    return { dateLabel, summaryLabel: dateLabel };
  }

  const hasTime = measuredAt.length > 10;
  const summaryLabel = hasTime ? `Hoje, ${date.format('HH:mm')}` : 'Hoje';

  return { dateLabel, summaryLabel };
}