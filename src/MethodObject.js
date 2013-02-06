function ComplicatedMethod() {

	this.x=0;
	this.y=0;

	this.gamma = function(inputVal,quantity,yearToDate) {
			var importantValue1 = (inputVal * quantity) + this.delta();
			var importantValue2 = (inputVal * yearToDate) + 100;
			if((yearToDate - importantValue1) > 100) {importantValue2 -= 20;}
			var importantValue3 = importantValue2 * 7;
			return importantValue3 - 2 * importantValue1;
	};

	this.move=function(x,y){};
	this.reset=function(){};
	this.draw=function(){};
	this.delta=function(){return 3;};

}