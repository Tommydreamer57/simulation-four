angular.module('trivia').controller('homeController', function ($scope, homeService) {
    $scope.test = 'test scope'
    $scope.myfilter = ''
    $scope.search = false;
    $scope.modal = false;
    $scope.selectedQuestion = {}


    console.log('controller')
    homeService.getQuestions().then(function (questions) {
        console.log(questions.data)
        $scope.questions = questions.data
    })

    $scope.getQuestions = function () {
        homeService.getQuestions().then(function (questions) {
            console.log(questions.data)
            $scope.questions = questions.data
        })
    }


    $scope.selectOption = function (question, option) {
        console.log(option)
        console.log(question)
        question.chosen = option
        if (option == question.options[question.correct_answer]) {
            console.log('true')
            question.correct = true
            question.class = "Easy"
        }
        else {
            console.log('false')
            question.correct = false
            question.class = "Hard"
        }
    }


    $scope.toggleSearch = function () {
        console.log($scope.search)
        $scope.search = !$scope.search
    }


    $scope.toggleModal = function (question) {
        console.log(question)
        $scope.modal = !$scope.modal
        $scope.selectedQuestion = Object.assign({}, question)
    }


    $scope.postQuestion = function () {
        homeService.postQuestion($scope.selectedQuestion)
            .then(response => {
                console.log(response.data)
                $scope.getQuestions()
                $scope.modal = false
            })
    }

    $scope.updateQuestion = function () {
        homeService.updateQuestion($scope.selectedQuestion)
            .then(response => {
                console.log(response.data)
                $scope.getQuestions()
                $scope.modal = false                
            })
    }

    $scope.deleteQuestion = function () {
        homeService.deleteQuestion($scope.selectedQuestion)
            .then(response => {
                console.log(response.data)
                $scope.getQuestions()
                $scope.modal = false                
            })
    }


    $scope.setFilter = function (n) {
        console.log(n)
        $scope.myfilter = n
        if (n) {
            homeService.getQuestions().then(response => {
                $scope.questions = response.data.filter(q => q.difficulty === n)
                console.log($scope.questions)
                $scope.questions = $scope.questions
            }
            )
        }
        else {
            homeService.getQuestions().then(response => {
                $scope.questions = response.data
                $scope.questions = $scope.questions
            })
        }
    }
})