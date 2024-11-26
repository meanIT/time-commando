declare module "time-commando" {
  export function D(val: any): Date;
  export function now(): Date;
  export function nextMidnight(date?: Date): Date;
  export function toYYYYMMDD(d: Date, dashes?: boolean): string;

  export const oneSecondMS = 1000;
  export const oneMinuteMS = 60000;
  export const oneHourMS = 3600000;
  export const oneDayMS = 86400000;
  export const oneWeekMS = 604800000;

  export function seconds(num: number): number;
  export function minutes(num: number): number;
  export function hours(num: number): number;
  export function days(num: number): number;
  export function weeks(num: number): number;
}
