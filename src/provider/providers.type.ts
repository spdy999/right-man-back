import { Model } from 'sequelize-typescript';

export interface ProviderType {
  provide: string;
  useValue: typeof Model;
}
