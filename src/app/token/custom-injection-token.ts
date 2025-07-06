import { InjectionToken } from "@angular/core";

export interface Logger {
  log(message: string): void;
}

export const LoggerToken = new InjectionToken<Logger>('LoggerToken');