/*
	# NoInfoPath
	@version 0.2.0
*/

//Establish global namespace
var noInfoPath = {};

(function(angular){
	function ProgressTracker() {
		this.message = "Loading";
		this.current = 0;
		this.percent = 0;
		this.max = 0;
		this.showProgress = true;
		this.css = "";

		var _proto_ = Object.getPrototypeOf(this);

		_proto_.start = function(options){
			var def = angular.extend({min: 0, max: 0, showProgress: true, css: ""}, options || {} );
			this.current = def.min;
			this.max = def.max;
			this.showProgress = def.showProgress;
			this.css = def.css;
			this.update();
		};

		_proto_.update = function(msg) {
			//console.log(angular.toJson(this));
			if(this.max > 0){
				this.percent = this.max === 0 ? 0 : Math.ceil((this.current / this.max) * 100);
				this.changeMessage(msg || "", this.showProgress);
				//console.info(this.message, this.current, this.max, this.percent)
				this.current++;
			}else{
				this.percent = 0;
				this.message = "";
			}
		};

		_proto_.changeMessage = function(msg, showProgress){
			this.message = msg + (showProgress  ?  " (" + this.percent + "%)" : "");
		};

		_proto_.changeCss = function(css){
			this.css = css;
		};

	}

	noInfoPath.ProgressTracker = ProgressTracker;

})(angular);