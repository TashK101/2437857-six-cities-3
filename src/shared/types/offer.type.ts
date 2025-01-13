import { User } from './user.type.js';


export type Cities = 'Paris' | 'Cologne' | 'Hamburg' | 'Dusseldorf' | 'Brussels' | 'Amsterdam';

export type Amenity = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';

export const CitiesEnum = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
} as const;

export const AmenityEnum = {
  Breakfast: 'Breakfast',
  AirConditioning: 'Air conditioning',
  LaptopFriendlyWorkspace: 'Laptop friendly workspace',
  BabySeat: 'Baby seat',
  Washer: 'Washer',
  Towels: 'Towels',
  Fridge: 'Fridge',
} as const;

export type Coordinates = {
    latatude: number,
    longitude: number,
}

export type Offer = {
    name: string;
    description: string;
    createData: Date;
    city: Cities;
    previewImage: string,
    images: string[];
    premium: boolean;
    favorite: boolean;
    rating: number;
    bedrooms: number;
    guests: number;
    amenities: Amenity[];
    autor: User;
    price: number;
    commentsCount: string;
    coordinates: Coordinates;
}
