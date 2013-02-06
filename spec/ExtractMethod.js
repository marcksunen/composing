describe("CodeBreaker", function() {

  var codeBreaker;

  beforeEach(function() {
    codeBreaker = new CodeBreakerEM();
  });


  it(" checks perfect matches correctly", function() {
    var code="AMVI"
    expect(codeBreaker.check('RRRR',code)).toEqual('');
    expect(codeBreaker.check('ARRR',code)).toEqual('*');
    expect(codeBreaker.check('AMRR',code)).toEqual('**');
    expect(codeBreaker.check('AMVR',code)).toEqual('***');
    expect(codeBreaker.check('AMVI',code)).toEqual('****');
  });
 
  it(" checks partial matches correctly", function() {
    var code="AMVI"
    expect(codeBreaker.check('RRRR',code)).toEqual('');
    expect(codeBreaker.check('RARR',code)).toEqual('-');
    expect(codeBreaker.check('RRAM',code)).toEqual('--');
    expect(codeBreaker.check('RAMV',code)).toEqual('---');
    expect(codeBreaker.check('IAMV',code)).toEqual('----');
  });

  it(" checks mixed matches correctly", function() {
    var code="AMVI"
    expect(codeBreaker.check('RRRR',code)).toEqual('');
    expect(codeBreaker.check('ARMR',code)).toEqual('-*');
    expect(codeBreaker.check('AMRV',code)).toEqual('-**');    
    expect(codeBreaker.check('AVMR',code)).toEqual('--*');
    expect(codeBreaker.check('AMIV',code)).toEqual('--**');
    expect(codeBreaker.check('AIMV',code)).toEqual('---*');
  });

});