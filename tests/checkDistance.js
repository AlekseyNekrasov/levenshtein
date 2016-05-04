'use strict';

const getDistance = require('../levenshtein').getDistance;
const expect = require('chai').expect;

describe('Test distance suggestion', () => {
    it('Should give corrected suggestion.', () => {
        expect(getDistance('some1', 'some2')).to.equal(1);
        expect(getDistance('Hello there!', 'Hoi here?')).to.equal(6);
        expect(getDistance('Same text', 'Same text')).to.equal(0);
    });

    it('Distance should equal the length of word, if compare with empty string.', () => {
        const mockText = 'Testing';
        expect(getDistance(mockText, '')).to.equal(mockText.length);
    });
});
