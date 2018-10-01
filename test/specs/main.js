/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;
const {
  isObject,
  hasProperty,
} = require('bellajs');

const config = require('../../index');

const structure = [
  'parserOptions',
  'env',
  'globals',
  'plugins',
  'extends',
  'rules',
];

test('Testing Shareable Config  object:', (assert) => {
  assert.ok(isObject(config), 'Shareable Config must be an object.');
  structure.every((k) => {
    assert.ok(hasProperty(config, k), `Shareable Config must have the property "${k}"`);
    return k;
  });

  assert.ok(
      config.extends.includes('eslint:recommended'),
      `config.extends value must include Eslint recommended rules`
  );
  assert.ok(
      config.extends.includes('google'),
      `config.extends value must include Google style`
  );
  assert.end();
});
