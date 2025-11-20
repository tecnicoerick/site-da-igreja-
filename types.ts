export interface Ministry {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

export interface DevotionalState {
  topic: string;
  content: string;
  loading: boolean;
  error: string | null;
}
