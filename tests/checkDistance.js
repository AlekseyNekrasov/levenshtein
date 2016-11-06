'use strict';
const Levenshtein = require('../levenshtein');
const expect = require('chai').expect;

describe('Test distance suggestion', () => {
    it('Should return the right distance.', () => {
        expect((new Levenshtein('some1', 'some2')).getDistance()).to.equal(1);
        expect((new Levenshtein('Hello there!', 'Hoi here?')).getDistance()).to.equal(6);
        expect((new Levenshtein('Same text', 'Same text')).getDistance()).to.equal(0);
    });

    it('Distance should equal the length of word, if compare with empty string.', () => {
        const mockText = 'Testing';
        expect((new Levenshtein(mockText, '')).getDistance()).to.equal(mockText.length);
    });
});
