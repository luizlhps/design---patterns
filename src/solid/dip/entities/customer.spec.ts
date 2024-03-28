import { EnterpriseCustomer, IndividualCustomer } from './customer';
const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (firstName: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(firstName, cnpj);
};

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const firstName = 'luiz';
    const lastName = 'henrique';
    const cpf = '123';

    const sut = createIndividualCustomer(firstName, lastName, cpf);

    expect(sut).toHaveProperty('firstName', firstName);
    expect(sut).toHaveProperty('lastName', lastName);
    expect(sut).toHaveProperty('cpf', cpf);
  });

  it('should return the name in the format of first name and last name', () => {
    const firstName = 'luiz';
    const lastName = 'henrique';
    const cpf = '123';

    const sut = createIndividualCustomer(firstName, lastName, cpf);
    expect(sut.getName()).toBe(firstName + ' ' + lastName);
  });

  it('should return cpf', () => {
    const firstName = 'luiz';
    const lastName = 'henrique';
    const cpf = '123';

    const sut = createIndividualCustomer(firstName, lastName, cpf);
    expect(sut.getIDN()).toBe(cpf);
  });
});
describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const name = 'luiz';
    const cnpj = '123';

    const sut = createEnterpriseCustomer(name, cnpj);

    expect(sut).toHaveProperty('name', name);
    expect(sut).toHaveProperty('cnpj', cnpj);
  });

  it('should return the name', () => {
    const name = 'luiz';
    const cnpj = '123';

    const sut = createEnterpriseCustomer(name, cnpj);
    expect(sut.getName()).toBe(name);
  });

  it('should return cnpj', () => {
    const name = 'luiz';
    const cnpj = '123';

    const sut = createEnterpriseCustomer(name, cnpj);
    expect(sut.getIDN()).toBe(cnpj);
  });
});
