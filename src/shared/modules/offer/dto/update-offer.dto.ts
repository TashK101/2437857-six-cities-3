import { Cities, Coordinates } from '../../../types/offer.type.js';

export class UpdateOfferDto {
  public name?: string;
  public description?: string;
  public createData?: Date;
  public city?: Cities;
  public previewImage?: string;
  public images?: string[];
  public premium?: boolean;
  public favorite?: boolean;
  public rating?: number;
  public bedrooms?: number;
  public guests?: number;
  public amenities?: string[];
  public autor?: string;
  public commentsCount?: number;
  public coordinates?: Coordinates;
}
