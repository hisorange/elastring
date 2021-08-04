import { Elastring } from '../src';

describe('Elastring', () => {
  it('should construct from string', () => {
    expect(() => new Elastring('string')).not.toThrow();
  });

  it('should not construct from POJO', () => {
    expect(() => new Elastring({ value: 'of' } as any)).toThrow(
      'Elastring received a non string variable: object',
    );
  });

  it('should not construct from numbers', () => {
    expect(() => new Elastring(42 as any)).toThrow(
      'Elastring received a non string variable: number',
    );
  });

  it('should convert to singular', () => {
    expect(new Elastring('children').singular.toString()).toBe('child');
  });

  it('should convert to plural', () => {
    expect(new Elastring('child').plural.toString()).toBe('children');
  });

  it('should chain', () => {
    expect(new Elastring('child').plural).toBeInstanceOf(Elastring);
  });

  it.each([
    ['ela string', 'ElaString'],
    ['ela-string', 'ElaString'],
    ['ela.string', 'ElaString'],
    ['elastring', 'Elastring'],
    ['ela-string', 'ElaString'],
    ['ela0string', 'Ela0String'],
    ['ELAString', 'ElaString'],
  ])(
    'should convert [%s] into pascal case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).pascalCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela string', 'elaString'],
    ['ela-string', 'elaString'],
    ['ela.string', 'elaString'],
    ['elastring', 'elastring'],
    ['ela-string', 'elaString'],
    ['ela0string', 'ela0String'],
  ])(
    'should convert [%s] into camel case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).camelCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela string', 'ela-string'],
    ['ela-string', 'ela-string'],
    ['ela.string', 'ela-string'],
    ['elastring', 'elastring'],
    ['ela-string', 'ela-string'],
    ['ela0string', 'ela-0-string'],
  ])(
    'should convert [%s] into kebab case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).kebabCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'ela_s_tring'],
    ['ela-string', 'ela_string'],
    ['ela.string', 'ela_string'],
    ['elastring', 'elastring'],
    ['ela-string', 'ela_string'],
    ['ela0string', 'ela_0_string'],
    ['ELA', 'ela'],
    ['ElaSTring', 'ela_s_tring'],
    ['ELAString', 'ela_string'],
    ['ElaString', 'ela_string'],
  ])(
    'should convert [%s] into snake case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).snakeCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'ela.s.tring'],
    ['ela-string', 'ela.string'],
    ['ela.string', 'ela.string'],
    ['elastring', 'elastring'],
    ['ela-string', 'ela.string'],
    ['ela0string', 'ela.0.string'],
    ['ELA', 'ela'],
    ['ElaSTring', 'ela.s.tring'],
    ['ELAString', 'ela.string'],
    ['ElaString', 'ela.string'],
  ])(
    'should convert [%s] into dot case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).dotCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'Ela s tring'],
    ['ela-string', 'Ela string'],
    ['ela.string', 'Ela string'],
    ['elastring', 'Elastring'],
    ['ela-string', 'Ela string'],
    ['ela0string', 'Ela 0 string'],
    ['ELA', 'Ela'],
    ['ElaSTring', 'Ela s tring'],
    ['ELAString', 'Ela string'],
    ['ElaString', 'Ela string'],
  ])(
    'should convert [%s] into human case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).humanCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'Ela S Tring'],
    ['ela-string', 'Ela String'],
    ['ela.string', 'Ela String'],
    ['elastring', 'Elastring'],
    ['ela-string', 'Ela String'],
    ['ela0string', 'Ela 0 String'],
    ['ELA', 'Ela'],
    ['ElaSTring', 'Ela S Tring'],
    ['ELAString', 'Ela String'],
    ['ElaString', 'Ela String'],
  ])(
    'should convert [%s] into title case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).titleCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'ELA STRING'],
    ['ela-string', 'ELA-STRING'],
    ['ela.string', 'ELA.STRING'],
    ['elastring', 'ELASTRING'],
    ['ela-string', 'ELA-STRING'],
    ['ela0string', 'ELA0STRING'],
    ['ELA', 'ELA'],
    ['ElaSTring', 'ELASTRING'],
    ['ELAString', 'ELASTRING'],
    ['ElaString', 'ELASTRING'],
  ])(
    'should convert [%s] into upper case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).upperCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'ela string'],
    ['ela-string', 'ela-string'],
    ['ela.string', 'ela.string'],
    ['elastring', 'elastring'],
    ['ela-string', 'ela-string'],
    ['ela0string', 'ela0string'],
    ['ELA', 'ela'],
    ['ElaSTring', 'elastring'],
    ['ELAString', 'elastring'],
    ['ElaString', 'elastring'],
  ])(
    'should convert [%s] into lower case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).lowerCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'Ela STring'],
    ['ela-string', 'Ela-string'],
    ['ela.string', 'Ela.string'],
    ['elastring', 'Elastring'],
    ['ela-string', 'Ela-string'],
    ['ela0string', 'Ela0string'],
    ['ELA', 'ELA'],
    ['ElaSTring', 'ElaSTring'],
    ['ELAString', 'ELAString'],
    ['ElaString', 'ElaString'],
  ])(
    'should convert [%s] into capital case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).capitalCase.toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'elaSTring'],
    ['ela- string', 'ela-string'],
    ['ela. stRing', 'ela.stRing'],
  ])(
    'should convert [%s] into spaceless case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).vacuumCase.toString()).toBe(output);
    },
  );

  it.each([
    ['string', 'elastring'],
    ['String', 'elaString'],
    ['.string', 'ela.string'],
  ])('should prefix [%s] into [%s]', (input: string, output: string) => {
    expect(new Elastring(input).prefix('ela').toString()).toBe(output);
    expect(new Elastring(input).prefix(new Elastring('ela')).toString()).toBe(
      output,
    );
  });

  it.each([
    ['ela', 'ela.ts'],
    ['ELA', 'ELA.ts'],
    ['.Ela', '.Ela.ts'],
  ])('should suffix [%s] into [%s]', (input: string, output: string) => {
    expect(new Elastring(input).suffix('.ts').toString()).toBe(output);
    expect(new Elastring(input).suffix(new Elastring('.ts')).toString()).toBe(
      output,
    );
  });

  it.each([
    ['ela.ts', 'ela'],
    ['ELAS.T.IC', 'ELAS.T'],
  ])(
    'should remove extension [%s] as [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).stripExtension().toString()).toBe(output);
    },
  );

  it.each([
    ['ela STring', 'ela/s/tring'],
    ['ela-string', 'ela/string'],
    ['ela.string', 'ela/string'],
    ['elastring', 'elastring'],
    ['ela-string', 'ela/string'],
    ['ela0string', 'ela/0/string'],
    ['ELA', 'ela'],
    ['ElaSTring', 'ela/s/tring'],
    ['ELAString', 'ela/string'],
    ['ElaString', 'ela/string'],
  ])(
    'should convert [%s] into path case [%s]',
    (input: string, output: string) => {
      expect(new Elastring(input).pathCase.toString()).toBe(output);
    },
  );

  it('should reverse the string', () => {
    expect(new Elastring('rev').reverse.toString()).toBe('ver');
  });
});
