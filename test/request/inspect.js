
'use strict';

const request = require('../helpers/context').request;
const assert = require('assert');

describe('req.inspect()', function(){
  describe('with no request.req present', function(){
    it('should return null', function(){
      const req = request();
      req.method = 'GET';
      delete req.req;
      assert(null == req.inspect());
    });
  });

  it('should return a json representation', function(){
    const req = request();
    req.method = 'GET';
    req.url = 'example.com';
    req.header.host = 'example.com';

    req.inspect().should.eql({
      method: 'GET',
      url: 'example.com',
      header: {
        host: 'example.com'
      }
    });
  });
});
