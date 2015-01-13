/* Author:

*/
soundManager.setup({

    url: '/swf/',
    flashVersion: 9,
    preferFlash: false,

    onready: function() {

            
        var setCookie = function(c_name,value,exdays) {
            var exdate=new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value=escape(value) + ((exdays===null) ? "" : "; expires="+exdate.toUTCString());
            document.cookie=c_name + "=" + c_value;
        };

        var getCookie = function(c_name) {
            var i,x,y,ARRcookies=document.cookie.split(";");
            for (i=0;i<ARRcookies.length;i++) {
              x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
              y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
              x=x.replace(/^\s+|\s+$/g,"");
              if (x==c_name)
                {
                return unescape(y);
                }
            }
        };

        var play = function(file) {
            soundManager.stopAll();
            //soundManager.destroySound(file);

            // if(sound) {
            //     console.debug(sound);
            //     soundManager.setPosition(file, 0);
            //     soundManager.resume(file);
            //     return;
            // }

            soundManager.createSound({
              id: file,
              url: file,
              autoLoad: true,
              autoPlay: true,
              onload: function() {
                    //alert('The sound '+this.sID+' loaded!');
              },
              onerror: function() {
                console.log(arguments);
              },
              volume: 50
            });
        };

        $("#cownter").flipCounter({
            number: getCookie('cow') ? parseInt(getCookie('cow'), 10) : 0, // the initial number the counter should display, overrides the hidden field
            numIntegralDigits:1, // number of places left of the decimal point to maintain
            numFractionalDigits:0, // number of places right of the decimal point to maintain
            digitClass:"counter-digit", // class of the counter digits
            counterFieldName:"counter-value", // name of the hidden field
            digitHeight:40, // the height of each digit in the flipCounter-medium.png sprite image
            digitWidth:30, // the width of each digit in the flipCounter-medium.png sprite image
            imagePath:"img/flipCounter-medium.png", // the path to the sprite image relative to your html document
            easing: 'easeOutQuad', // the easing function to apply to animations, you can override this with a jQuery.easing method
            duration:10000
        });

        $('#cow').on('click', function() {
            var curr = $("#cownter").flipCounter("getNumber") + 1,
                num = Math.floor(1+ Math.random()*12);

            $("#cownter").flipCounter("setNumber", curr);
            play('sound/moo' + num + '.ogg');
            setCookie('cow', curr, 30);
        });

        $('#cow').on('mouseenter', function(ev) {
            play('sound/intro.ogg');
            $('#cow').off('mouseenter');
        });
      
    }
});

