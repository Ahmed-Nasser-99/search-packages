interface Country {
  _id: string;
  name: string;
  nameAr: string;
  code: string;
}

interface City {
  _id: string;
  name: string;
  sector: number;
  nameAr: string;
}

interface Zone {
  _id: string;
  name: string;
  nameAr: string;
}

interface District {
  _id: string;
  name: string;
  nameAr: string;
}

interface DropOffAddress {
  country: Country;
  city: City;
  zone: Zone;
  district: District;
  firstLine: string;
  geoLocation: null;
}

interface CurrentStatus {
  state: string;
  code: number;
  timestamp: string;
}

interface TransitEvent {
  timestamp: string;
  state: string;
  code: number;
  msg?: string;
  exceptionCode?: string;
}

interface WorkingDay {
  dayDate: string;
  dayName: string;
}

export interface ShipmentDetails {
  provider: string;
  Type: string;
  ScheduleDate: string;
  CurrentStatus: CurrentStatus;
  TransitEvents: TransitEvent[];
  TrackingNumber: string;
  CreateDate: string;
  DropOffAddress: DropOffAddress;
  PromisedDate: string;
  isEditableShipment: boolean;
  exceptionCode: number;
  nextWorkingDay: WorkingDay[];
  collectedFromBusiness: string;
  canRequestPOSMachine: boolean;
  deliveryCountryCode: string;
  canPayOnline: boolean;
  isOnlinePaymentFeatureEnabled: boolean;
}