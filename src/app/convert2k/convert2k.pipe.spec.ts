import {Convert2KPipe} from './convert2k.pipe';

describe('Convert2K Pipe test', () => {
  let converter: Convert2KPipe = null;

  beforeEach(() => {
    converter = new Convert2KPipe();
  });


  it('create an instance', () => {
    expect(converter).toBeTruthy();
  });

  it('should convert 1000 to 1KB', () => {
    const testInput = 1000;
    const expectedResults = '1KB';
    const transformed = converter.transform(testInput, false);
    expect(transformed).toBe(expectedResults);
  });

  it('should convert 1000000 to 1MB', () => {
    const testInput = 1000000;
    const expectedResults = '1MB';
    const transformed = converter.transform(testInput, false);
    expect(transformed).toBe(expectedResults);
  });

  it('should convert 1000000000 to 1GB', () => {
    const testInput = 1000000000;
    const expectedResults = '1GB';
    const transformed = converter.transform(testInput, false);
    expect(transformed).toBe(expectedResults);
  });


  it('should convert 1024 to 1KB', () => {
    const testInput = 1024;
    const expectedResults = '1KB';
    const transformed = converter.transform(testInput, true);
    expect(transformed).toBe(expectedResults);
  });
});
