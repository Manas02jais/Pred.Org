$(document).ready(function () {
    $(".user-list-item").click(function () {
      // Remove active class from all user-list-items
      $(".user-list-item").removeClass("active");
      // Add active class to clicked user-list-item
      $(this).addClass("active");
      // Get the text from the user-info paragraph of the clicked user-list-item
      var userName = $(this).find(".user-info").text();
      // Update the chatUserName span with the username
      $("#chatUserName").text("Chat with " + userName);
      // You can add logic to load previous chat history or reset the chat messages here
    });

    $("#sendBtn").click(function () {
      var message = $(".form-control").val();
      if (message.trim() !== "") {
        $(".chat-messages").append("<div class='message-container'><div class='user-name'>You:</div><div class='message-bubble'>" + message + "</div></div>");
        $(".form-control").val("");
        $(".chat-messages").scrollTop($(".chat-messages")[0].scrollHeight);
      }
    });

    // Pressing Enter to send message
    $(".form-control").keypress(function (e) {
      if (e.which === 13) {
        $("#sendBtn").click();
      }
    });
  });
  // button toggle js
  $(document).ready(function () {
    $('.toggle-btn').click(function () {
      $('.toggle-btn').removeClass('active');
      $(this).addClass('active');
    });
  });