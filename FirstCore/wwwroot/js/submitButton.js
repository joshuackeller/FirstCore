
$('#submitButton').click(
    () => {
        // Keep browser from refreshing

        // Calculate Grade
        const grade = ($("#assignments").val() * .55) +
            ($("#groupProject").val() * .05) +
            ($("#quizzes").val() * .1) +
            ($("#exams").val() * .2) +
            ($("#intex").val() * .1);

        // Calculate Letter Grade
        var letterGrade = 'none'
        if (grade >= 94) {
            letterGrade = 'A'
        } else if (grade >= 90 ) {
            letterGrade = 'A-'
        }
        else if (grade >= 87) {
            letterGrade = 'B+'
        }
        else if (grade >= 84) {
            letterGrade = 'B'
        }
        else if (grade >= 80) {
            letterGrade = 'B-'
        }
        else if (grade >= 77) {
            letterGrade = 'C+'
        }
        else if (grade >= 74) {
            letterGrade = 'C'
        }
        else if (grade >= 70) {
            letterGrade = 'C-'
        }
        else if (grade >= 67) {
            letterGrade = 'D+'
        }
        else if (grade >= 64) {
            letterGrade = 'D'
        }
        else if (grade >= 60) {
            letterGrade = 'D-'
        }
        else{
            letterGrade = 'E'
        }
        alert('Final Percent: ' + grade.toFixed(2)
              + '\n Letter Grade: ' + letterGrade);
    });

