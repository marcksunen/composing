describe("Complicated method", function() {

  var subject;

  beforeEach(function() {
    subject = new ComplicatedMethod();
  });

  it(" has a very obcure method complicate to refactor", function() {
    expect(subject.gamma(12,34,3)).toEqual(130);
    expect(subject.gamma(1,35,666)).toEqual(5146);
  });

});