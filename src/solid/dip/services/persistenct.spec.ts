import { Persistency } from './persistency';

describe('Persistency', () => {
  it('should return undefined', () => {
    const persistence = new Persistency();
    expect(persistence.saveOrder()).toBeUndefined();
  });

  it('should call console.log', () => {
    const persistence = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    persistence.saveOrder();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should call console.log with "salvo com sucesso"', () => {
    const persistence = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    persistence.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('salvo com sucesso');
  });
});
