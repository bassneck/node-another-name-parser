"use strict";

require('./polyfills');

module.exports = {
  isBlank: function(s) {
    return s === null || s === undefined ? true : /^[\s\xa0]*$/.test(s);
  },
	collapseWhitespace: function(s) {
		return s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
	},
  indexOf: function(haystack, needle) {
    if (typeof haystack === 'string') {
      return haystack.toUpperCase().indexOf(needle.toUpperCase());
    } else {
      // assume haystack is an array-ish thing of strings
      return haystack.findIndex(function(val) {
        return val.toUpperCase() === needle.toUpperCase();
      });
    }
  },
	count: function(haystack, needle) {
    var cnt = 0,
      n = needle.toUpperCase();

    if (typeof haystack === 'string') {
      var hs = haystack.toUpperCase(),
        idx = hs.indexOf(n);

      while (idx >= 0) {
        cnt++;
        idx = hs.indexOf(n, idx + 1);
      }
    } else {
      cnt = haystack.filter(function(val) {
        return val.toUpperCase() === n;
      }).length;
    }

    return cnt;
	},
  contains: function(haystack, needle) {
    return this.indexOf(haystack, needle) > -1;
  },
  compact: function(haystack) {
    return haystack.filter(function(i) { return !!i });
  }
};
