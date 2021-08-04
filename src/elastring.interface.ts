export interface IElastring {
  /**
   * Singular form of the subject.
   */
  readonly singular: IElastring;

  /**
   * Plural form of the subject.
   */
  readonly plural: IElastring;

  /**
   * Pascal case: MyProperty
   */
  readonly pascalCase: IElastring;

  /**
   * Camel case: myProperty
   */
  readonly camelCase: IElastring;

  /**
   * Kebab case: my-property
   */
  readonly kebabCase: IElastring;

  /**
   * Snake case: my_property
   */
  readonly snakeCase: IElastring;

  /**
   * Snake case: my.property
   */
  readonly dotCase: IElastring;

  /**
   * Human case: My property
   */
  readonly humanCase: IElastring;

  /**
   * Title case: My Property
   */
  readonly titleCase: IElastring;

  /**
   * Upper case: MY PROPERTY
   */
  readonly upperCase: IElastring;

  /**
   * Lower case: my property
   */
  readonly lowerCase: IElastring;

  /**
   * Capital case: My property
   */
  readonly capitalCase: IElastring;

  /**
   * RemoveInnerSpaces.
   */
  readonly vacuumCase: IElastring;

  /**
   * Dev/Space/For/U
   */
  readonly pathCase: IElastring;

  /**
   * rev -> ver
   */
  readonly reverse: IElastring;

  /**
   * Concatanate with the given string.
   *
   * @param subject
   */
  prefix(subject: string | IElastring): IElastring;

  /**
   * Concatanate with the given string.
   *
   * @param subject
   */
  suffix(subject: string | IElastring): IElastring;

  /**
   * Remove the extension from a path like string
   */
  stripExtension(): IElastring;
}
