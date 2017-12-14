/* global describe, it, before */

import chai from 'chai';
import {canonicalCL} from '../lib/library.js';

chai.expect();

const expect = chai.expect;

describe('canonicalURL', () => {
  it('should return a valid shortCL URL when given a valid long CL URL', () => {
    const canonicalURL =
      canonicalCL('https://seattle.craigslist.org/est/cto/d/see-and-leave-reviews-on-cl/6408661519.html');

    expect(canonicalURL).to.be.equal('https://seattle.craigslist.org/est/cto/6408661519.html');
  });
  it('should return a valid shortCL URL when given a valid short CL URL', () => {
    const canonicalURL = canonicalCL('https://seattle.craigslist.org/est/cto/6408661519.html');

    expect(canonicalURL).to.be.equal('https://seattle.craigslist.org/est/cto/6408661519.html');
  });
  it('should return null when given a non-craigslist URL', () => {
    const url = canonicalCL('https://test.com/est/cto/6408661519.html');

    expect(url).to.be.equal(null);
  });
});
