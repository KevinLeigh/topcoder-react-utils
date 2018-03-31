/* eslint-env browser */

import _ from 'lodash';
import { isClientSide, isServerSide } from 'utils/isomorphy';

const CLIENT_SIDE_CONFIG = {
  TYPE: 'CLIENT_SIDE_CONFIG',
};

const SERVER_SIDE_CONFIG = {
  TYPE: 'SERVER_SIDE_CONFIG',
};

jest.setMock('config', _.clone(SERVER_SIDE_CONFIG));

beforeEach(() => {
  jest.resetModules();
  window.CONFIG = _.clone(CLIENT_SIDE_CONFIG);
});

afterEach(() => delete global.FRONT_END);

test('Serves injected config at the client side', () => {
  global.FRONT_END = true;
  expect(isClientSide()).toBe(true);
  expect(require('utils/config')).toEqual(CLIENT_SIDE_CONFIG);
});

test('Serves node-config at the server side', () => {
  expect(isServerSide()).toBe(true);
  expect(require('utils/config')).toEqual(SERVER_SIDE_CONFIG);
});
