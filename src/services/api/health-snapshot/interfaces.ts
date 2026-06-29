import { PaginatedResponse } from '@/interfaces/common';
import { HealthSnapshot } from '@/interfaces/health-snapshot';

export interface GetHealthSnapshotsParams {
  page?: number;
  per_page?: number;
}

export type GetHealthSnapshotsResponse = PaginatedResponse<HealthSnapshot>;

export type GetHealthSnapshotResponse = HealthSnapshot;

export type GetLatestHealthSnapshotResponse = HealthSnapshot;

export type CreateHealthSnapshotRequest = Omit<
  HealthSnapshot,
  'id' | 'recommendations'
>;

export type CreateHealthSnapshotResponse = HealthSnapshot;
