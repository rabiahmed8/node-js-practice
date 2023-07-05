
    
$('#submitButton').on('click',function(){
    $.ajax({
            url: "http://localhost:3000/api/login/profile",
            type: 'POST',
            data: { 
                    // firstName: $('#firstName').val(),
                    // lastName: $('#lastName').val()
                },
            contentType: 'application/json',
            headers: {
                    "Authorization": "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidGVzdEBhYmMuY29tIiwicGFzc3dvcmQiOiJ0ZXN0In0sImlhdCI6MTY4ODYwOTIyNiwiZXhwIjoxNjg4NjA5NTI2fQ.SG2rynG_a8kuhQHCbgOkxX4G-ae07dySGdSdvxNN3zA'
                    },
            async: false
            }).then(res => console.log(res))
});

