export class Utils {
  // Example: Constants
  static readonly DEFAULT_PLACEHOLDER = 'Enter something...';
  static readonly API_URL = 'https://api.example.com';
  static hours: string[] = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')); // ["00", "01", ..., "23"]
  static minutes: string[] = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0')); // ["00", "05", ..., "55"]

  // Example: Utility Methods
  static formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  static isNullOrEmpty(value: string | null | undefined): boolean {
    return !value || value.trim().length === 0;
  }
}
