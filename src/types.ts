// Minimal interfaces for version compatibility

export interface Currency {
  isoCode: string;
}

export interface Money {
  equals(other: Money): boolean;
}
