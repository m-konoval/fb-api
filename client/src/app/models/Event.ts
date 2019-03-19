export interface Event {
  name: string;
  type: string;
  description: string;
  place: {
    name: string;
    location: string;
  };
  start_date: Date;
  end_date: Date;
}
