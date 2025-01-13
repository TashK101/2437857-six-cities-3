import {
  defaultClasses,
  getModelForClass,
  prop,
  modelOptions,
} from '@typegoose/typegoose';
import { createSHA256 } from '../../helpers/index.js';

import { User } from '../../types/index.js';

  @modelOptions({
    schemaOptions: {
      collection: 'users',
      timestamps: true,
    },
  })
export class UserEntity extends defaultClasses.TimeStamps implements User {
    @prop({ unique: true, required: true })
  public email: string;

    @prop({ required: false, default: '' })
    public avatarPath: string;


    @prop({ required: true, default: '' })
    public name: string;

    public typeUser: 'ordinary' | 'pro';


    @prop({ required: true, default: '' })
    private password?: string;

    constructor(userData: User) {

      super();

      this.email = userData.email;
      this.avatarPath = userData.avatarPath;
      this.name = userData.name;
      this.typeUser = userData.typeUser;

    }

    public setPassword(password: string, salt: string) {
      this.password = createSHA256(password, salt);
    }

    public getPassword() {
      return this.password;
    }
}

export const UserModel = getModelForClass(UserEntity);
