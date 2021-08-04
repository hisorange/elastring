import { humanize, pluralize, singularize, titleize } from 'inflection';
import { IElastring } from './elastring.interface';

import toUpperFirst = require('lodash.upperfirst');
import toSnakeCase = require('lodash.snakecase');
import toCamelCase = require('lodash.camelcase');
import toKebabCase = require('lodash.kebabcase');
import removeSpaces = require('strman.removespaces');

export class Elastring implements IElastring {
  protected readonly subject: string;

  constructor(subject: string) {
    if (typeof subject === 'string') {
      subject = subject.trim();
    } else {
      throw new Error(
        'Elastring received a non string variable: ' + typeof subject,
      );
    }

    this.subject = subject.toString();
  }

  get singular(): IElastring {
    return new Elastring(singularize(this.subject));
  }

  get plural(): IElastring {
    return new Elastring(pluralize(this.subject));
  }

  get pascalCase(): IElastring {
    return new Elastring(toUpperFirst(toCamelCase(this.normalize())));
  }

  get camelCase(): IElastring {
    return new Elastring(toCamelCase(this.normalize()));
  }

  get kebabCase(): IElastring {
    return new Elastring(toKebabCase(this.normalize()));
  }

  get snakeCase(): IElastring {
    return new Elastring(toSnakeCase(this.normalize()));
  }

  get dotCase(): IElastring {
    return new Elastring(this.normalize().replace(/_/g, '.'));
  }

  get humanCase(): IElastring {
    return new Elastring(humanize(this.normalize()));
  }

  get titleCase(): IElastring {
    return new Elastring(titleize(this.normalize()));
  }

  get upperCase(): IElastring {
    return new Elastring(this.subject.toUpperCase());
  }

  get lowerCase(): IElastring {
    return new Elastring(this.subject.toLowerCase());
  }

  get capitalCase(): IElastring {
    return new Elastring(toUpperFirst(this.subject));
  }

  get vacuumCase(): IElastring {
    return new Elastring(removeSpaces(this.subject));
  }

  prefix(prefix: string | IElastring): IElastring {
    if (typeof prefix === 'string') {
      prefix = new Elastring(prefix);
    }

    return new Elastring(prefix.toString() + this.subject);
  }

  suffix(suffix: string | IElastring): IElastring {
    if (typeof suffix === 'string') {
      suffix = new Elastring(suffix);
    }

    return new Elastring(this.subject + suffix.toString());
  }

  stripExtension(): IElastring {
    return new Elastring(this.subject.toString().replace(/\.[^\.]+$/, ''));
  }

  get pathCase(): IElastring {
    return new Elastring(this.normalize().replace(/_/g, '/'));
  }

  toString(): string {
    return this.subject;
  }

  /**
   * Produce a snake case output built with only
   * lower case characters, this can be easily formated
   * by the used case transformators.
   *
   * @protected
   * @returns {string}
   * @memberof StringTransformer
   */
  protected normalize(): string {
    const subject = this.subject;

    return toSnakeCase(subject).toLowerCase();
  }
}
