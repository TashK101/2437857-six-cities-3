import { Cities } from '../../../types/offer.type.js';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { CreateUpdateOfferMessage } from './update-offer.messages.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: CreateUpdateOfferMessage.tytle.minLength })
  @MaxLength(100, { message: CreateUpdateOfferMessage.tytle.maxLength })
  public tytle?: string;

  @IsOptional()
  @MinLength(20, { message: CreateUpdateOfferMessage.description.minLength })
  @MaxLength(1024, { message: CreateUpdateOfferMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: CreateUpdateOfferMessage.createDate.invalidFormat }
  )
  public createDate?: Date;

  public city?: Cities;

  public previewImage?: string;

  @IsOptional()
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Must be a boolean type' })
  public premium?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'Must be a boolean type' })
  public favorite?: boolean;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.rating.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.rating.minValue })
  @Max(20000, { message: CreateUpdateOfferMessage.rating.maxValue })
  public rating?: number;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.guests.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.guests.minValue })
  @Max(20000, { message: CreateUpdateOfferMessage.guests.maxValue })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.guests.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.guests.minValue })
  @Max(20000, { message: CreateUpdateOfferMessage.guests.maxValue })
  public guests?: number;

  public amenities?: string[];

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.price.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.price.min })
  @Max(20000, { message: CreateUpdateOfferMessage.price.max })
  public price?: number;
}
