'use strict';

var arr = [];
var charCodeCache = [];

module.exports = { getDistance, getClosest };

function getDistance(a, b) {
  var aLen = a.length;
  var bLen = b.length;
  var i = 0;
  var j = 0;
  var bCharCode;
  var res;
  var tmp;
  var tmp2;

	if (aLen === 0) {
		return bLen;
	}

	if (bLen === 0) {
		return aLen;
	}

	while (i < aLen) {
		charCodeCache[i] = a.charCodeAt(i);
		arr[i] = ++i;
	}

	while (j < bLen) {
		bCharCode = b.charCodeAt(j);
		tmp = j++;
		res = j;

	  for (i = 0; i < aLen; i++) {
			tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
			tmp = arr[i];
      res = arr[i] = tmp > res
                        ? tmp2 > res
                          ? res + 1
                          : tmp2
                        : tmp2 > tmp
                          ? tmp + 1
                          : tmp2;
		}
	}

	return res;
}

function getClosest(target, items, config = {}) {
  let closest;
  let closestDistance = Infinity;

  items.forEach( item => {
    const dist = getDistance(target, item, config);

    if(dist < closestDistance) {
      closestDistance = dist;
      closest = item;
    }
  });

  return closest;
}
