'use strict';

describe('getDistance', function() {
    it('Should return the right distance.', function() {
        expect(new Levenshtein('some1', 'some2').getDistance()).to.equal(1);
        expect(new Levenshtein('Hello there!', 'Hoi here?').getDistance()).to.equal(6);
        expect(new Levenshtein('Same text', 'Same text').getDistance()).to.equal(0);
    });

    it('Distance should equal to the length of word, if compare with empty string.', function() {
        const mockLeft = 'Testing';
        expect(new Levenshtein(mockLeft, '').getDistance()).to.equal(mockLeft.length);

        const mockRight = 'Some text';
        expect(new Levenshtein('', mockRight).getDistance()).to.equal(mockRight.length);
    });
});
