var names_of_people = [];

function submit() {
    var GuestName = document.getElementById("name1").value;
    var display_guest_array = [];
    for (var j = 1; j <= 4; j++) {
        var name_of_the_guest = document.getElementById("name_of_the_guest_" + j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }
    console.log(GuestName);
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
    document.getElementById("display_name").innerHTML = names_of_people.toString();
}



function show()


for (var k = 0; k < lenght_of_name_of_students_array; k++) {
    display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
    console.log(display_student_array_sorting);
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display = "block";

}


function sorting() {
    names_of_people name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
        var i = names_of_people.join("<br>");
        console.log(names_of_people);
        document.getElementById("sorted").innerHTML = i.toString();
    }


    function searching() {
        var s = document.getElementById("s1").value;
        var found = 0;
        var j;
        for (j = 0; j < names_of_people.length; j++) {
            if (s == names_of_people[j]) {
                found = found + 1;
            }
        }
        document.getElementById("p2").innerHTML = "name found " + found + " time/s";
        console.log("found name " + found + " time/s");
    }