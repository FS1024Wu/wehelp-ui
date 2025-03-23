export class Utils {
  // Example: Constants
  static readonly DEFAULT_PLACEHOLDER = 'Enter something...';
  static readonly API_URL = 'https://api.example.com';
  static hours: string[] = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')); // ["00", "01", ..., "23"]
  static minutes: string[] = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0')); // ["00", "05", ..., "55"]
  static helpers: number[] = [1,2,3,4,5]
  static helper_hours: number[] = [0,1,2,3,4,5,6,7,8]
  static bedrooms: [number, number, number, string] = [1, 2, 3, '4+']
  static bathrooms: [number, string, number, string,number, string, string] = [1,'1.5', 2,'2.5', 3,'3.5', '4+']

  // Example: Utility Methods
  static formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  static isNullOrEmpty(value: string | null | undefined): boolean {
    return !value || value.trim().length === 0;
  }
}
