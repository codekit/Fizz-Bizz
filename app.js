$(document).ready(function () {
    var maxVal;
    $('#fb').click(function () {
        $('#myList').empty();
        $('.error').text("");
        maxVal = $('#myText').val();
        if (isNaN(maxVal)) {
            $('#myText').val('');
            $('.error').text("Enter an Integer value");
        }
        calcFizzBuzz(maxVal);

        function calcFizzBuzz(val) {
            function isDivisible(k) {
                if ((k % 15) == 0) {
                    $('#myList').append('<li class="fb">Fizz Buzz</li>');
                } else if ((k % 3) == 0) {
                    $('#myList').append('<li class="f">Fizz</li>');
                } else if ((k % 5) == 0) {
                    $('#myList').append('<li class="b"> Buzz</li>');
                } else {
                    $('#myList').append("<li>" + i + "</li>");
                }
            }
            for (var i = 1; i <= val; i++) {
                isDivisible(i);
                $('#myText').val('');
            }
        }
    });
});