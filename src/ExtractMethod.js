function CodeBreakerEM() {

	var TOKEN_PERFECT_MATCHES="*";
	var TOKEN_PARTIAL_MATCHES='-';
	this.check = function(guessCode, code) {
		var checkerMatches=new CheckerMatches(guessCode, code);
		var perfectMatches = checkerMatches.obtainMatches(checkerMatches.checkIsPerfectMatches,TOKEN_PERFECT_MATCHES);
		var partialMatches = checkerMatches.obtainMatches(checkerMatches.checkIsParcialMatches,TOKEN_PARTIAL_MATCHES);
		
		var numberPartialMatchesCorrects=(partialMatches.length - perfectMatches.length);

		partialMatches = partialMatches.substring(0, numberPartialMatchesCorrects);
		return partialMatches + perfectMatches;
	};

	function CheckerMatches(guessCode, code){
		this.guessCode=guessCode;
		this.code=code;
		this.checkIsPerfectMatches= function(index){
			return this.guessCode[index] === this.code[index];
		}
		this.checkIsParcialMatches = function(index){
			return this.code.indexOf(this.guessCode[index]) != -1;
		}
		this.obtainMatches=function(checker, token){
			var matches = "";
			for(var index in this.guessCode) {
				if(checker.apply(this,[index])) {
					matches += token;
				}
			}
			return matches;
		}
	}
}