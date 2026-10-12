document.getElementById("calculateBtn").onclick = () => {

    var name = document.getElementById("studentName").value;
    var roll = document.getElementById("rollNumber").value;

    var history = Number(document.getElementById("history").value);
    var geography = Number(document.getElementById("geography").value);
    var mathematics = Number(document.getElementById("mathematics").value);
    var english = Number(document.getElementById("english").value);
    var science = Number(document.getElementById("science").value);

    var total = history + geography + mathematics + english + science;

    var percentage = total / 500 * 100;

    var grade = "";
    var status = "";

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }


    var bestSubject = "";
    var highest = -1;

    if (history > highest) {
        highest = history;
        bestSubject = "History";
    }

    if (geography > highest) {
        highest = geography;
        bestSubject = "Geography";
    }

    if (mathematics > highest) {
        highest = mathematics;
        bestSubject = "Mathematics";
    }

    if (english > highest) {
        highest = english;
        bestSubject = "English";
    }

    if (science > highest) {
        highest = science;
        bestSubject = "Science";
    }


    var weakestSubject = "";
    var lowest = 101;

    if (history < lowest) {
        lowest = history;
        weakestSubject = "History";
    }

    if (geography < lowest) {
        lowest = geography;
        weakestSubject = "Geography";
    }

    if (mathematics < lowest) {
        lowest = mathematics;
        weakestSubject = "Mathematics";
    }

    if (english < lowest) {
        lowest = english;
        weakestSubject = "English";
    }

    if (science < lowest) {
        lowest = science;
        weakestSubject = "Science";
    }


    var subjectsPassed = 0;
    var subjectsFailed = 0;

    if (history >= 40) {
        subjectsPassed++;
    } else {
        subjectsFailed++;
    }

    if (geography >= 40) {
        subjectsPassed++;
    } else {
        subjectsFailed++;
    }

    if (mathematics >= 40) {
        subjectsPassed++;
    } else {
        subjectsFailed++;
    }

    if (english >= 40) {
        subjectsPassed++;
    } else {
        subjectsFailed++;
    }

    if (science >= 40) {
        subjectsPassed++;
    } else {
        subjectsFailed++;
    }



    if (percentage >= 50 && subjectsFailed == 0) {
        status = "PASS";
    } else {
        status = "FAIL";
    }



    document.getElementById("result").innerHTML =
        "Student Name: " + name + "<br>" +
        "Roll No: " + roll + "<br>" +
        "History: " + history + "<br>" +
        "Geography: " + geography + "<br>" +
        "Mathematics: " + mathematics + "<br>" +
        "English: " + english + "<br>" +
        "Science: " + science + "<br>" +
        "Total: " + total + " / 500<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade + "<br>" +
        "Best Subject: " + bestSubject + " (" + highest + ")<br>" +
        "Weakest Subject: " + weakestSubject + " (" + lowest + ")<br>" +
        "Subjects Passed: " + subjectsPassed + "<br>" +
        "Subjects Failed: " + subjectsFailed + "<br>" +
        "Status: " + status;
};


document.getElementById("resetBtn").onclick = () => {

    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("history").value = "";
    document.getElementById("geography").value = "";
    document.getElementById("mathematics").value = "";
    document.getElementById("english").value = "";
    document.getElementById("science").value = "";

    document.getElementById("result").innerHTML = "";
};
