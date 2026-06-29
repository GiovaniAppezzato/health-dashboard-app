export const queryKeys = {
  healthSnapshots: {
    all: ['health-snapshots'] as const,
    list: ['health-snapshots', 'list'] as const,
    latest: ['health-snapshots', 'latest'] as const,
    detail: (id: number) => ['health-snapshots', 'detail', id] as const,
  },
};
