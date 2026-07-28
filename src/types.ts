export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  turnaround: string;
  startingPrice: string;
  features: string[];
  toolsUsed: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ValueProp {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface RepairTicket {
  ticketId: string;
  customerName: string;
  deviceModel: string;
  issueDescription: string;
  status: 'Diagnostic' | 'Microsoldering' | 'Testing' | 'Ready';
  progressPercentage: number;
  receivedDate: string;
  estimatedCompletion: string;
  assignedTechnician: string;
  technicianNotes: string[];
  replacedComponents: string[];
  costEstimate: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  isMainBranch: boolean;
  mapEmbedUrl: string;
}
