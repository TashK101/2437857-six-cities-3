import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { Cities, Coordinates } from '../../../types/offer.type.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public city: Cities;

  @Expose()
  public tytle: string;

  @Expose()
  public description: string;

  @Expose()
  public previewImage: string;

  @Expose()
  public createDate: string;

  @Expose()
  public images: string[];

  @Expose()
  public premium: boolean;

  @Expose()
  public favorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public bedrooms: number;

  @Expose()
  public guests: number;

  @Expose()
  public amenities: boolean;

  @Expose()
  public author: boolean;

  @Expose()
  public commentsCount: number;

  @Expose()
  public coordinates: Coordinates;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public user: UserRdo;
}
