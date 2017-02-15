/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the GPLv3 license found at
  http://www.gnu.org/licenses/gpl-3.0.txt.
*/

'use strict';

const utils = require('../utils');

const Promise = utils.Promise;
const cli = require('ping');

const dbg = utils.dbg(__filename);


// module.exports.map = (rhost, opts = {}) =>
module.exports.map = rhost =>
  new Promise((resolve, reject) => {
    const result = { up: false };
    const cliOpts = {
      // TODO: Not working for values over > 2000
      // timeout: opts.timeout || 5000,
      extra: ['-i 1'], // 1 attempt
    };

    dbg('Starting, opts', cliOpts);
    cli.promise.probe(rhost, cliOpts)
    .then((res) => {
      dbg('Response received', res);

      // We're only sending one so if no max -> host down.
      // if (res.max) {
      //   result.up = true;
      //   // We only made one, so avg is the same and the parsing is easier.
      //   result.data = { time: res.avg };
      // }
      result.up = true;

      resolve(result);
    })
    .catch(err => reject(err));
  });