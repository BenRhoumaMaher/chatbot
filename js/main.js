var sendBtn = document.getElementById('sendBtn')
var textbox = document.getElementById('textbox')
var chatContainer = document.getElementById('chatContainer')
// XmlHttpRequest used to request data from server
var httpRequest = new XMLHttpRequest()

// chatbot message function
function chatbotSendMessage (messageText) {
  if (
    httpRequest.readyState == XMLHttpRequest.DONE &&
    httpRequest.status == 200
  ) {
    // store the complete array response in a variable after decoding it from json format to text format
    var result = JSON.parse(httpRequest.responseText)

    var messageElement = document.createElement('div')
    messageElement.classList.add('w-50')
    messageElement.classList.add('float-left')
    messageElement.classList.add('shadow-sm')
    messageElement.style.margin = '10px'
    messageElement.style.padding = '5px'

    messageElement.innerHTML =
      '<span>Chatbot: </span>' +
      '<span style=' +
      'margin-top:10px;padding:10px' +
      '>' +
      // get the value 'message' from result.response_message key
      result.response_message +
      '</span>'
    messageElement.animate(
      [{ easing: 'ease-in', opacity: 0.4 }, { opacity: 1 }],
      { duration: 1000 }
    )
    chatContainer.appendChild(messageElement)
  } else {
    //alert('error')
  }
}

// function for showing the message sent
function sendMessage (messageText) {
  var messageElement = document.createElement('div')
  messageElement.classList.add('w-50')
  messageElement.classList.add('float-right')
  messageElement.classList.add('shadow-sm')
  messageElement.style.margin = '10px'
  messageElement.style.padding = '5px'

  messageElement.innerHTML =
    '<span>You: </span>' +
    '<span style=' +
    'margin-top:10px;padding:10px' +
    '>' +
    messageText +
    '</span>'
  messageElement.animate(
    [{ easing: 'ease-in', opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  )
  chatContainer.appendChild(messageElement)
  //call request function after displaying message on the screen
  makeRequest(messageText)
}

// function for making request to db
function makeRequest (messageText) {
  // ajax request

  //open() to open connexion with the server
  //first parameter is the method
  //second is the php file that'll make connexion to the db
  httpRequest.open('Get', 'chatbot.php?message=' + messageText)
  // sending the request
  httpRequest.send()
  // getting response
  // onreadystatchange used to call function and get response one responce is ready
  // so once chatbot respond, a function will be called
  httpRequest.onreadystatechange = chatbotSendMessage
}

// send message when click on button
sendBtn.addEventListener('click', function (e) {
  if (textbox.value == '') {
    alert('Please type in a message')
  } else {
    let messageText = textbox.value
    sendMessage(messageText)
    textbox.value = ''
  }
})
