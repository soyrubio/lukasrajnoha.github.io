(function (angular) {
    "use strict";


    var paaApp = angular.module('paaApp', []);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    paaApp.directive("mathjaxBind", function () {
        return {
            restrict: "A",
            scope: {
                text: "@mathjaxBind"
            },
            controller: ["$scope", "$element", "$attrs", function ($scope, $element, $attrs) {
                $scope.$watch('text', function (value) {
                    var $script = angular.element("<script type='math/tex'>")
                        .html(value == undefined ? "" : value);
                    $element.html("");
                    $element.append($script);
                    MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
                });
            }]
        };
    });

    paaApp.directive('dynamic', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function (html) {
                    html = html.replace(/\$\$([^$]+)\$\$/g, "<span class=\"blue\" mathjax-bind=\"$1\"></span>");
                    html = html.replace(/\$([^$]+)\$/g, "<span class=\"red\" mathjax-bind=\"$1\"></span>");
                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    });

    paaApp.controller('NewsController', ['$scope', function ($scope) {

        var currentQuestionIndex = 0;
        $scope.selection = [];
        $scope.userText = "";
        $scope.totalErrors = 0;
        $scope.totalOK = 0;
        var tmpQQ;

        var OTAZKY;

        $scope.reset = function () {
            $scope.userText = "";
        };

        $scope.setQuestions = function (questions) {

            tmpQQ = questions;

            var fin = [];
            var iter = 1;
            $scope.question = [];
            $scope.textAnswer = "";

            $scope.questionText = questions.otazka;

            if (questions.note) {
                $scope.note = questions.note;
            } else {
                $scope.note = "";
            }

            angular.forEach(questions.odpovedi, function (value, key) {

                fin.push({
                    text: value,
                    isCorrect: questions.spravne[iter] === 1
                });

                iter++;
            });

            if (questions.odpoved) {
                $scope.textAnswer = questions.odpoved;
            }

            $scope.question = fin;
            $scope.total = OTAZKY.length;
        };


        $scope.solve = function (questions) {

            if ($scope.textAnswer) {
                $scope.ss = true;
                return;
            }

            var f = false;

            angular.forEach($scope.question, function (oo) {

                if ($scope.isCorrect(oo) === false) {
                    f = true;
                }

            });

            if (f === true) {
                $scope.totalErrors++;

                OTAZKY.push(tmpQQ);
                OTAZKY = shuffleArray(OTAZKY);
            } else {
                $scope.totalOK++;
            }

            $scope.errorDeted = f;

            $scope.ss = true;

        };

        (function () {
            OTAZKY = shuffleArray(otazky);
            $scope.setQuestions(OTAZKY.pop());
        })();


        $scope.nextOK = function () {
            $scope.totalOK++;
            $scope.next();
        };

        $scope.nextWrong = function () {
            OTAZKY.push(tmpQQ);
            OTAZKY = shuffleArray(OTAZKY);

            $scope.totalErrors++;
            $scope.next();
        };


        $scope.next = function () {
            currentQuestionIndex++;
            $scope.questionText = "";
            $scope.note = "";

            $scope.ss = false;
            $scope.selection = [];
            $scope.setQuestions(OTAZKY.pop());
            $scope.reset();
        };

        $scope.isCorrect = function (que) {
            var isSelected = $scope.selection.indexOf(que) > -1;
            var shouldBechecked = que.isCorrect;

            if (isSelected == shouldBechecked) {
                return true;
            } else {
                return false;
            }
        };


        // toggle selection for a given fruit by name
        $scope.toggleSelection = function toggleSelection(fruitName) {
            var idx = $scope.selection.indexOf(fruitName);

            // is currently selected
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.selection.push(fruitName);
            }
        };

    }]);


})(angular);

(function () {


})();
