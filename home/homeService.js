angular.module('trivia').service('homeService', function ($http) {
    this.getQuestions = function () {
        return $http({
            method: 'GET',
            url: `http://localhost:3002/api/questions`
        })
    }
    this.postQuestion = function (question) {
        return $http({
            method: "POST",
            url: `http://localhost:3002/api/questions`,
            data: JSON.stringify(question)
        })
    }
    this.updateQuestion = function (question) {
        return $http.put(`http://localhost:3002/api/questions/${question._id}`, question)
        
    }
    this.deleteQuestion = function (question) {
        return $http.delete(`http://localhost:3002/api/questions/${question._id}`, question)
    }
})

// OLD URLS
// `https://practiceapi.devmountain.com/api/trivia/questions`
// `https://practiceapi.devmountain.com/api/trivia/questions/${question._id}`