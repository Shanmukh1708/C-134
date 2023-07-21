//Create date variable
var date = new Date()
console.log(date)
let display_date = "Date" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function(){

    $("#display_date").html(display_date)

})

//Define variable to store predicted emotion
var message
let predicted_emotion

//jQuery selector and click action
$(function () {
    $("#predict_button").click(function () {
        let input_data = {
            "text":$("#text").val()
        }
        console.log(input_data)

         //AJAX call
        $.ajax({
            type:'POST',
            url:"/predicted_emotion",
            data:JSON.stringify(input_data),
            contentType:"json",
            success:function(result)
            
              {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url
                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display", "block", "color", "red");
                $("#emo_img_url").attr("src", emo_url);
                $("#emo_img_url").css("display", "block")

            },
            //Error function
            error:function(result){
                alert(result.responseJSON.message)
            }
            
        });
    });
})

