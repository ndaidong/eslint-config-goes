// index.test

const {
  isObject,
  hasProperty,
} = require('bellajs');


const config = require('./index');

const structure = [
  'parserOptions',
  'env',
  'globals',
  'plugins',
  'extends',
  'rules',
];


test(`Shareable config must be an object.`, async () => {
  expect(isObject(config)).toBe(true);
});

structure.forEach((k) => {
  test(`Shareable Config must have the property "${k}"`, () => {
    expect(hasProperty(config, k)).toBe(true);
  });
});

test(`config.extends value must include Eslint recommended rules`, async () => {
  expect(config.extends.includes('eslint:recommended')).toBe(true);
});


test(`config.extends value must include Google style`, async () => {
  expect(config.extends.includes('google')).toBe(true);
});

