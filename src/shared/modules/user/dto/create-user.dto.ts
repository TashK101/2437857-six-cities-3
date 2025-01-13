export class CreateUserDto {
  public email: string;
  public avatarPath: string;
  public name: string;
  public typeUser: 'ordinary' | 'pro';
  public password: string;
}
