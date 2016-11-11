'use strict';

describe('getDistance', function() {
    it('Should return the right distance.', function() {
        expect(lev.getDistance('some1', 'some2')).to.equal(1);
        expect(lev.getDistance('Hello there!', 'Hoi here?')).to.equal(6);
        expect(lev.getDistance('Same text', 'Same text')).to.equal(0);
        expect(lev.getDistance('Same text', 'Same texT')).to.equal(1);
    });

    it('Distance should equal to the length of word, if compare with empty string.', function() {
        const mockLeft = 'Testing';
        expect(lev.getDistance(mockLeft, '')).to.equal(mockLeft.length);

        const mockRight = 'Some text';
        expect(lev.getDistance('', mockRight)).to.equal(mockRight.length);
    });
});
