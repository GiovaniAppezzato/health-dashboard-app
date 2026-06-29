export interface HealthSnapshot {
  id: number;
  glucose_level: number;
  heart_rate: number;
  sleep_hours: number;
  water_intake: number;
  measured_at: string;
  recommendations: Recommendation[];
}

export interface Recommendation {
  position: number;
  content: string;
}
