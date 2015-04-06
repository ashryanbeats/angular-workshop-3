app.controller('MainController', function (FlashCardsFactory, $scope) {

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = null;

    $scope.flashCards = [];

    $scope.getCategoryCards = function (theCategory) {
        $scope.loading = true;
        $scope.currentCategory = theCategory;
        FlashCardsFactory.getFlashCardsByCategory(theCategory).then(function (cards) {
            $scope.flashCards = cards;
            $scope.loading = false;
        });
    };

    $scope.getAllCards = function () {
        $scope.loading = true;
        $scope.currentCategory = null;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
            $scope.loading = false;
        });
    };

    $scope.getAllCards();

});