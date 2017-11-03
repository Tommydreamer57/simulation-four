angular.module('trivia').service('homeService', function ($http) {
    this.getQuestions = function () {
        return $http({
            method: 'GET',
            url: `https://practiceapi.devmountain.com/api/trivia/questions`
        })
    }
    this.postQuestion = function (question) {
        return $http({
            method: "POST",
            url: `https://practiceapi.devmountain.com/api/trivia/questions`,
            data: JSON.stringify(question)
        })
    }
    this.updateQuestion = function (question) {
        return $http.put(`https://practiceapi.devmountain.com/api/trivia/questions/${question._id}`, question)
        
    }
    this.deleteQuestion = function (question) {
        return $http.delete(`https://practiceapi.devmountain.com/api/trivia/questions/${question._id}`, question)
    }
})