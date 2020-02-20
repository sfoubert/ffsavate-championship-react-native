export interface Event {
  id: string;
  startDate: Date;
  endDate: Date;
  eventType: string;
  label: string;
  description?: string;
}
