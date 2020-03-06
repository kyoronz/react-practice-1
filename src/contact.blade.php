<p>This is a demo email for testing purposes! Also, it's the HTML version.</p>

<p><u>Details:</u></p>

<p>Name            : {{$request['name']}}</p>
<p>Email           : {{$request['email']}}</p>
<p>Contact Number  : {{$request['tel']}}</p>
<p>Subject         : {{$request['subject']}}</p>
<p>Message         :</p>
<?php //pre is used to accept new line from apps ?>
<pre>{{$request['message']}}</pre>
<br>
Thank You.
