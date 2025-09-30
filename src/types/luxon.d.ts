declare module 'luxon' {
  export class DateTime {
    static now(): DateTime;
    setZone(zone: string): DateTime;
    toFormat(format: string): string;
  }
}
