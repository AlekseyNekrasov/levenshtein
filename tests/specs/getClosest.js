describe('getClosest', function() {
    it('Get right closest element', function(){
      const closest = lev.getClosest('alexey@nekrasov.nl', [
        'alex@gmail.com',
        'al@nekrasov.nl',
        'some@nekrasov.nl',
        'alexey@gmail.com'
      ]);

      expect(closest).to.equal('al@nekrasov.nl');
    });
});
