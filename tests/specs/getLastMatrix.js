describe('getLastMatrix', function(){
  it('Should build right martix for strings', function(){
    const textRight = 'Other textsss';
    const textLeft = 'Some text';

    testSet(textRight, textLeft);
  });

  it('Should be filled in for left empty string', function() {
    const textLeft = 'Some text';
    const textRight = '';

    testSet(textRight, textLeft);
  });

  it('Should be filled in for right empty string', function() {
    const textLeft = '';
    const textRight = 'Some text';

    testSet(textRight, textLeft);
  });
});

function testSet(textLeft, textRight) {
  lev.getDistance(textLeft, textRight);

  for(let i = 0; i<= textRight.length; i++) {
    for(let j = 0; j<= textLeft.length; j++) {
        expect(lev.getLastMatrix()[i][j]).to.not.equal(undefined);
    }
  }
}
