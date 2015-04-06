app.directive('flashCard', function(ScoreFactory){
	return {
		restrict: "EA",
		templateUrl: "js/directives/loader/flash-card.html",
		link: function(scope, element, attrs) {
			console.log(scope, element, attrs);

			scope.answered = false;
		    
		    scope.answeredCorrectly = null;

		    scope.answerQuestion = function (answer) {

		        if (scope.answered) {
		            return;
		        }

		        scope.answered = true;
		        scope.answeredCorrectly = answer.correct;

		        if (answer.correct) {
		            ScoreFactory.correct++;
		        } else {
		            ScoreFactory.incorrect++;
		        }

		    };

		},
		scope: {
			card: "="
		}	
	};
});