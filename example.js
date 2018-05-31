<!DOCTYPE html>
<html>
<head>
    <title>Learning Javascript</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

</head>

<body>
    <p>How many fingers am I holding up?</p>
    <input id="answer" />
    <button id="myButton">Submit</button>

    <script type="text/javascript">
        document.getElementById("myButton").onclick = function() {
            var x = Math.random();
            x = x * 6;
            x = Math.floor(x);

            if (x==document.getElementById("answer").value) {
                alert("That's correct.");
            } else {
                alert ("That's incorrect. My number was: " + x);
            }
        };


         /* one parameter is base value
          second parameter is the power of.
          so, x to the power of...
          */

        //alert(Math.pow(x,3));

        /* . random generates a random number betwenn 0 and 1*/
        //var x = Math.random();
        //x = x * 5;
        //alert(x);

        /* .floor generates a whole number between 0 and 4 in this case
        because .random only generates number between 0 and 1 */
        //var x = Math.random();
        //x = x * 5;
        //x = Math.floor(x);
        //alert(x);

    </script>

</body>
</html>
