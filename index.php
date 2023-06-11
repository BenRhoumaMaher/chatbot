<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <h1 class="text-center">M&Code chatbot App</h1>
        <div class="media">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" alt=""
                class="rounded-circle float-left img-thumbnail" width="75px">
            <div class="media-body">
                <h5 style="margin:10px">Chatbot</h5>
                <span style="margin-left:10px;color:green">Online</span>
            </div>
        </div>
        <div id="chatContainer" class="container border overflow-auto" style="height:500px">
            <!--<div class="w-50 float-left shadow-sm" style="margin: 10px;padding:5px">
                <span>Chat:</span>
                <span style="margin-top:10px; padding:10px">How are you?</span>
            </div>
            <div class="w-50 float-right shadow-sm" style="margin:10px;padding:5px;">
                <span>You:</span>
                <span style="margin-top:10px;padding:10px">Great</span>
            </div>-->
        </div>
        <div class="input-group">
            <input type="text" id="textbox" class="form-control">
            <div class="input-group-append mb-5">
                <button id="sendBtn" type="button" class="btn btn-primary">Send</button>
            </div>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js">
    </script>

    <script src="js/main.js"></script>
</body>

</html>