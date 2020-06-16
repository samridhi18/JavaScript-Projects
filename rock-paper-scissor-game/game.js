

                var userscore=0;
                var computerscore=0;
                var myname=$("#namo").val();


    function getcomputerchoice()
          {
              const choices = ['r','p','s'];
              const randomnumber = (Math.floor(Math.random() * 3));



              return choices[randomnumber];
          }

    function converttoword(letter)
          {
            if(letter === "r") return "Rock";
            if(letter === "p") return "Paper";
             return "scissors";
          }

    function win(userchoice , computerchoice)
          {
            userscore++;
            console.log(userscore + "win");
            console.log(computerscore);
            $("#user-score").html(userscore);
            $("#computer-score").html(computerscore);


            const smalluserword = $("#namo").val().fontsize(3).sub();
            const smallcompword = "Computer".fontsize(3).sub();
            $("#result").html(`${converttoword(userchoice)}${smalluserword}  Beats  ${converttoword(computerchoice)}${smallcompword} <br><span style="color:green;">You Win!!</span> `);
            const userchoice_div = $(userchoice);
              userchoice_div.addClass('green-glow');
              setTimeout(function(){userchoice_div.removeClass('green-glow')},700);

          }

    function loose(userchoice , computerchoice)
          {
            computerscore++;
            console.log(userscore);
            console.log(computerscore + "losse");
            $("#user-score").html(userscore);
            $("#computer-score").html(computerscore);
            const smalluserword = $("#namo").val().fontsize(3).sub();
            const smallcompword = "Computer".fontsize(3).sub();
$("#result").html(`${converttoword(userchoice)}${smalluserword} Looses to  ${converttoword(computerchoice)}${smallcompword} <br><span style="color:red">You Loose!</span> `);
           const userchoice_div = $(userchoice);
            imgageg.addClass('red-glow');
              setTimeout(function(){userchoice_div.removeClass('red-glow')},700);
          }

    function draw(userchoice,computerchoice)
          {
            const smalluserword = $("#namo").val().fontsize(3).sub();
            const smallcompword = "Computer".fontsize(3).sub();
            $("#result").html(`${converttoword(userchoice)}${smalluserword}  Equals ${converttoword(computerchoice)}${smallcompword} <br><span style="color:white">Draw!</span> `);
            const userchoice_div = $(userchoice);
            userchoice_div.addClass('grey-glow');
            setTimeout(function(){userchoice_div.removeClass('grey-glow')},700);

          }


      function game(userchoice)
          {
              var computerchoice = getcomputerchoice();
              if(computerchoice=='r')
              {
                $("#computerside ").prepend('<img src="rock.png"></img><br>')
              }
              else if(computerchoice=='p')
              {
                $("#computerside").prepend('<img src="paper.png"></img><br>')
              }
              else if(computerchoice=='s')
              {
                $("#computerside ").prepend('<img src="csissor.png"></img><br>')
              }




              if (userchoice + computerchoice === "rs" || userchoice + computerchoice === "pr" || userchoice + computerchoice === "sp")
              {
                $('#myside').prepend('<br><img src="youwin.jpg"></img>')
                $('#computerside').prepend('<br><img src="lost.jpg"></img>')
                    win(userchoice,computerchoice);

              }
              else if (userchoice + computerchoice === "rp" || userchoice + computerchoice === "ps" || userchoice + computerchoice === "sr")
              {
                $('#myside').prepend('<br><img style="width:200px;height:300" src="youlost.jpg"></img>')
                $('#computerside').prepend('<br><img style="width:200px;height:150px" src="itwin.jpg"></img>')
                  loose(userchoice,computerchoice);

              }
              else if (userchoice + computerchoice === "rr" || userchoice + computerchoice === "pp" || userchoice + computerchoice === "ss")
              {
                  $('#myside').prepend('<br><img src="draw.gif"></img>')
                  $('#computerside').prepend('<br><img src="draw.gif"></img>')
                    draw(userchoice,computerchoice);

              }



          }

      $(document).ready(function()
            {


                  $('#r').on('click',function()
                  {
                      $("#myside").prepend('<img src="rock.png"></img><br>')
                        game("r");

                  })
                  $('#p').on('click',function()
                  {
                            $("#myside").prepend('<img src="paper.png"></img><br>')
                        game("p");
                  })
                  $('#s').on('click',function(){
                          $("#myside").prepend('<img src="csissor.png"></img><br>')
                        game("s");
                  })

            });

