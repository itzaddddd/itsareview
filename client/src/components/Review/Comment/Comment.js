
import './Comment.css';


        function showInput(context) {
            var commentInputEl = $('.template.comment-input').clone().removeClass('template');
            context.append(commentInputEl);
            commentInputEl.find('textarea').focus();
            //showCommentSubmitButton(context);
            commentInputEl.find('.submit').on('click', function(event){
              if(commentInputEl.find('textarea').val().length) {
                addNewComment(commentInputEl);
              } else {
                alert('Comment field can not be blank.');
              }
              
            })
          }
          
          function showCommentSubmitButton(commentInput) {
            var commentTextArea = commentInput.find("textarea");
            commentTextArea.on("keyup", function() {
              var commentTextAreaContent = commentTextArea.val();
              if (commentTextAreaContent.length) {
                commentInput.find(".button").css({
                  //opacity: 1
                });
              } else {
                commentInput.find(".button").css({
                  //opacity: 0
                });
              }
            });
          }
          
          function addNewComment(context) {
            if (context.parents(".thread").length) {
              var isThread = true;
            } else {
              var isThread = false;
            }
          
            var commentTextArea = context.closest(".comment-input").find("textarea");
            var newCommentText = commentTextArea.val();
            var newCommentEl = $(".template.comment")
              .clone()
              .removeClass("template");
            newCommentEl.find(".content").append(newCommentText);
          
            if (isThread) {
              newCommentEl.remove(".thread");
              //console.log(newCommentEl);
              context.parents(".thread").append(newCommentEl);
              $(".thread .comment-input").hide();
            } else {
              $(".comments").append(newCommentEl);
              
              $(".reply").on("click", function(event) {
                event.preventDefault();
                console.log("reply clicked");
                var context = $(this).closest(".comment");
                if(context.find('.thread').length) {
                  // thread exists, add to it
                  var inputTarget = context.find('.thread');
                  showInput(inputTarget);
                } else {
                  // create thread, then add to it
                  console.log('thread does not exist. making it');
                  context.append('<div class="thread"></div>');
                  var inputTarget = context.find('.thread');
                  showInput(inputTarget);
                }
                //if(context.find('.ext-reply').length) {
                  inputTarget.find('.thread').append('<a class="button ext-reply"></a>');
                //}
              });
            }
           
            if(context.parent().hasClass('main-comment-input')){
              context.find('textarea').val('');
              context.find('.submit').css({
                'opacity' : 0
              });
            } else {
              console.log('removing input');
              context.remove();
            }
          }
          
          // click event handler
          
          // show the main comment input
          var topLevelInput = $(".main-comment-input");
          showInput(topLevelInput);
        
 