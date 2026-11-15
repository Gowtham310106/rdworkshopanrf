export interface RegistrationData {
  id: string; // e.g. ANRF-2026-ABCD
  title: string;
  name: string;
  designation: string;
  department: string;
  institution: string;
  email: string;
  phone: string;
  paymentMode: string;
  transactionId: string;
  receiptUrl?: string;
  receiptFileName?: string;
  researchInterests: string[];
  foodPreference: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface RegistrationResponse {
  success: boolean;
  message?: string;
  registration?: RegistrationData;
  error?: string;
}
