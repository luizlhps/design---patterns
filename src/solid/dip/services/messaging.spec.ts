import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};
describe('Messaging', () => {
  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('should call console.log', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should call console.log with message', () => {
    const sut = createSut();
    const message = 'test';
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage(message);
    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});
