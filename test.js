/* global QUnit */
'use strict';

const impl = require('./impl');

/*
 * Test that impl contains function f(x) that returns true if x is 42.
 */
QUnit.test(
  'f(x) is true for x===42', (assert) => {
    assert.strictEqual(typeof impl.f, 'function');
    assert.ok(impl.f(42));
  });
