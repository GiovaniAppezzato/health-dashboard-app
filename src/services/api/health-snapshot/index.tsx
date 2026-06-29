import { AxiosResponse } from 'axios';

import api from '@/services/api';
import {
  CreateHealthSnapshotRequest,
  CreateHealthSnapshotResponse,
  GetHealthSnapshotResponse,
  GetHealthSnapshotsParams,
  GetHealthSnapshotsResponse,
  GetLatestHealthSnapshotResponse,
} from '@/services/api/health-snapshot/interfaces';

export default class HealthSnapshotService {
  static async getHealthSnapshots(
    params?: GetHealthSnapshotsParams,
  ): Promise<AxiosResponse<GetHealthSnapshotsResponse>> {
    return api.get<GetHealthSnapshotsResponse>('/health-snapshots', {
      params,
    });
  }

  static async getHealthSnapshot(
    id: number | string,
  ): Promise<AxiosResponse<GetHealthSnapshotResponse>> {
    return api.get<GetHealthSnapshotResponse>(`/health-snapshots/${id}`);
  }

  static async getLatestHealthSnapshot(): Promise<
    AxiosResponse<GetLatestHealthSnapshotResponse>
  > {
    return api.get<GetLatestHealthSnapshotResponse>(
      '/health-snapshots/latest',
    );
  }

  static async createHealthSnapshot(
    payload: CreateHealthSnapshotRequest,
  ): Promise<AxiosResponse<CreateHealthSnapshotResponse>> {
    return api.post<CreateHealthSnapshotResponse>(
      '/health-snapshots',
      payload,
    );
  }

  static async deleteHealthSnapshot(
    id: number | string,
  ): Promise<AxiosResponse<void>> {
    return api.delete(`/health-snapshots/${id}`);
  }
}
