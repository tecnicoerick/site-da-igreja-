export interface Member {
  id: string;
  name: string;
  role: string;
  photo: string;
}

export interface Ministry {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  icon: string;
  leader?: string;
  schedule?: string;
  members?: Member[];
  gallery?: string[];
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