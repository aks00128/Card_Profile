app.controller('cardCtrl', function ($scope, $http, $window) {



    

    $scope.onload = function () {

        var deck = ["diamonds", "spade", "club", "heart"]
        var cardID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        var UserProgress = {};
        var hearts = [], club = [], spade = [], diamonds = [];


        document.getElementById("Cards").click();
        document.getElementById("tabId").style.display = 'block';

        $.each(deck, function (index, item) {
            for (i = 1; i <= 13; i++) {
                temp = '<div class="' + item + ' card"> ' + cardID[i - 1] + '<br>' + item + '</div>';
                $(".cards_container").append(temp);
                $("." + item).draggable({ revert: "invalid" });
            }
        })

        $(".heart_continer").droppable({

            accept: ".heart",
            drop: function (event, ui) {
                hearts.push(ui.draggable[0]);
                console.log(hearts);
            }
        });
        $(".club_continer").droppable({
            accept: ".club",
            drop: function (event, ui) {
                club.push(ui.draggable[0]);
            }
        });
        $(".spade_continer").droppable({
            accept: ".spade",
            drop: function (event, ui) {
                spade.push(ui.draggable[0]);
            }
        });
        $(".diamonds_continer").droppable({
            accept: ".diamonds",
            drop: function (event, ui) {
                diamonds.push(ui.draggable[0]);
                $(this)
            }
        });

    }; 
    $scope.onload();
    $scope.reset = function(){ 
        $('.cards_container').empty();
        var deck = ["diamonds", "spade", "club", "heart"]
        var cardID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        var UserProgress = {};
        var hearts = [], club = [], spade = [], diamonds = [];

        $.each(deck, function (index, item) {
            for (i = 1; i <= 13; i++) {
                temp = '<div class="' + item + ' card"> ' + cardID[i - 1] + '<br>' + item + '</div>';
                $(".cards_container").append(temp);
                $("." + item).draggable({ revert: "invalid" });
            }
        })
    }

});