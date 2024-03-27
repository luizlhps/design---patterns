import { PersistencyProtocol } from './interfaces/persistency';

export class Persistency implements PersistencyProtocol {
  constructor() {}

  saveOrder(): void {
    console.log('salvo com sucesso');
  }
}
