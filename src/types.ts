// Minimal interfaces for version compatibility

export interface Currency {
  equals(other: Currency): boolean;
}

export interface Money {
  equals(other: Money): boolean;
}
