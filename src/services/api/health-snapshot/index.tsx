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
  ): Promise<GetHealthSnapshotsResponse> {
    const { data } = await api.get<GetHealthSnapshotsResponse>(
      '/health-snapshots',
      {
        params,
      },
    );

    return data;
  }

  static async getHealthSnapshot(
    id: number | string,
  ): Promise<GetHealthSnapshotResponse> {
    const { data } = await api.get<GetHealthSnapshotResponse>(
      `/health-snapshots/${id}`,
    );

    return data;
  }

  static async getLatestHealthSnapshot(): Promise<
    GetLatestHealthSnapshotResponse
  > {
    const { data } = await api.get<GetLatestHealthSnapshotResponse>(
      '/health-snapshots/latest',
    );

    return data;
  }

  static async createHealthSnapshot(
    payload: CreateHealthSnapshotRequest,
  ): Promise<CreateHealthSnapshotResponse> {
    const { data } = await api.post<CreateHealthSnapshotResponse>(
      '/health-snapshots',
      payload,
    );

    return data;
  }

  static async deleteHealthSnapshot(id: number | string): Promise<void> {
    await api.delete(`/health-snapshots/${id}`);
  }
}
