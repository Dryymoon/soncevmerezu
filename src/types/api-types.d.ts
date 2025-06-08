export type ErrorT = {
  type: "input_error" | "create_deny_due_duplicates" | string;
  jsonPath: string; // Example: schedules.1.code
  message: string;
  [key: string]: unknown; // Example: {minLen: 3, maxLen: 10}
};

export type ApiResponseDto<Entity> =
  | {
      list: Entity[];
      status: "OK";
      subStatus: "FOUND" | "CREATED" | "UPDATED" | "ZERO_RESULTS" | string;
      meta?: {
        [prop: string]: unknown;
      };
    }
  | {
      errors: (ErrorT | unknown)[];
      status: "ERROR";
      subStatus?: "NOT_IMPLEMENTED" | "VALIDATION_ERROR" | "UNAUTHORIZED" | string;
      meta?: {
        [prop: string]: unknown;
      };
    };

// Type definitions for our stats data
export type TrendData = {
  count: number | string;
  direction: "up" | "down" | "neutral";
  period: string;
};

export type DashboardStats = {
  totalAddresses: number;
  totalProperties: number;
  newAddresses: number;
  removedAddresses: number;
  propertyChanges: number;
  trends: {
    totalAddresses: Omit<TrendData, "direction">;
    totalProperties: Omit<TrendData, "direction">;
    newAddresses: TrendData;
    removedAddresses: TrendData;
    propertyChanges: TrendData;
  };
};

export interface Zone {
  id: number;
  community_id: number;
  code: number;
  name: string;
  schedules: Schedule[];
  addresses_count: number;
}

export type ZoneStats = {
  addressCount: number;
  city: string;
  zone: Zone;
  gps: [number, number];
};

export type Community = {
  id: number;
  name: string;
  description?: string;
  // code: string;
  hasAlert: boolean;
  // description?: string;
  // createdAt: Date;
  // updatedAt: Date;
  // addressCount: number;
  // province: string;
};

export type Program = {
  id: number;
  name: string;
  code: string;
};

export type ApiUserT = {
  email: "string";
  id: 0;
  name: "string";
  role: {
    code: "string";
    name: "string";
  };
  program: {
    code: "string";
    name: "string";
  };
};

export interface Schedule {
  id: number;
  zone_id: number;
  type_id: number;
  frequency_id: number;
  date_start: string; // ISO date string, e.g. "2025-04-13"
}

export interface Address {
  id: number;
  zone_id: number;
  street_full_name: string;
  street_number: string;
  postal_code: string;
  city: string;
  curbside_households: number;
  latitude: number;
  longitude: number;
  unit: string;
  notes: string;
  collection_route: string;
  zone?: Zone;
  collection_household_start_date: string;
}
