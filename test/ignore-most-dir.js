'use strict'
// ignore most things
const walk = require('../')

// set the ignores just for this test
require('./common.js').ignores({
  '.ignore': ['*', '!a/b/c/']
})

// the only files we expect to see
const expected = [
  'a/b/c/.aaa',
  'a/b/c/.aab',
  'a/b/c/.aac',
  'a/b/c/.aba',
  'a/b/c/.abb',
  'a/b/c/.abc',
  'a/b/c/.aca',
  'a/b/c/.acb',
  'a/b/c/.acc',
  'a/b/c/.baa',
  'a/b/c/.bab',
  'a/b/c/.bac',
  'a/b/c/.bba',
  'a/b/c/.bbb',
  'a/b/c/.bbc',
  'a/b/c/.bca',
  'a/b/c/.bcb',
  'a/b/c/.bcc',
  'a/b/c/.caa',
  'a/b/c/.cab',
  'a/b/c/.cac',
  'a/b/c/.cba',
  'a/b/c/.cbb',
  'a/b/c/.cbc',
  'a/b/c/.cca',
  'a/b/c/.ccb',
  'a/b/c/.ccc',
  'a/b/c/aaa',
  'a/b/c/aab',
  'a/b/c/aac',
  'a/b/c/aba',
  'a/b/c/abb',
  'a/b/c/abc',
  'a/b/c/aca',
  'a/b/c/acb',
  'a/b/c/acc',
  'a/b/c/baa',
  'a/b/c/bab',
  'a/b/c/bac',
  'a/b/c/bba',
  'a/b/c/bbb',
  'a/b/c/bbc',
  'a/b/c/bca',
  'a/b/c/bcb',
  'a/b/c/bcc',
  'a/b/c/caa',
  'a/b/c/cab',
  'a/b/c/cac',
  'a/b/c/cba',
  'a/b/c/cbb',
  'a/b/c/cbc',
  'a/b/c/cca',
  'a/b/c/ccb',
  'a/b/c/ccc'
]

const t = require('tap')

t.test('sync', t => {
  t.same(walk.sync({
    path: __dirname + '/fixtures',
    ignoreFiles: [ '.ignore' ]
  }), expected)
  t.end()
})

t.test('async', t => walk({
  path: __dirname + '/fixtures',
  ignoreFiles: [ '.ignore' ]
}, (er, result) => t.same(result, expected)))
