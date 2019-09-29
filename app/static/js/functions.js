function getBotResponse() {
    var rawText = $("#textInput").val();
    if (rawText !== "") {
        var header = '<div class="d-flex justify-content-end mb-4">';
        var message = '<div class="msg_cotainer_send">' + rawText;
        var now = new Date();
        var date = '<span class="msg_time">' + now.getHours() + ':' + now.getMinutes() + '</span></div><div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" class="rounded-circle user_img_msg"></div></div>';
        var userHtml = header.concat(message, date);
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document
        .getElementById("chatbox")
        .scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

        $.get("/get", { msg: rawText }).done(function(data) {
            header = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"></div>';
            message = '<div class="msg_cotainer">' + data;
            now = new Date();
            date = '<span class="msg_time">' + now.getHours() + ':' + now.getMinutes() + "</span></div></div>";
            var botHtml = header.concat(message, date);
            $("#chatbox").append(botHtml);
            document
                .getElementById("chatbox")
                .scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        });   
    }
  }

  $("#textInput").keypress(function(e) {
    if (e.which == 13) {
      getBotResponse();
    }
  });