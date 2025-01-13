import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { Cities, Coordinates } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

  @modelOptions({
    schemaOptions: {
      collection: 'offers',
      timestamps: true,
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
    @prop({ trim: true, required: true })
  public tytle!: string;

    @prop({ trim: true })
    public description!: string;

    @prop()
    public city!: Cities;

    @prop()
    public createDate!: Date;

    @prop()
    public previewImage!: string;

    @prop()
    public images!: string[];

    @prop()
    public premium!: boolean;

    @prop()
    public favorite!: boolean;

    @prop()
    public bedrooms!: number;

    @prop()
    public guests!: number;

    @prop()
    public amenities!: string[];

    @prop({
      ref: UserEntity,
      required: true,
    })
    public userId!: Ref<UserEntity>;

    @prop()
    public commentsCount!: string;

    @prop({ default: 0 })
    public coordinates!: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
