var project = [
    {
        name:"The High School Guide",
        img:"./galary/High_School_Guide.PNG",
        github_link:"https://github.com/Whatismyusername/High-School-Guide",
        live_link:"https://whatismyusername.github.io/High-School-Guide/",
        starred:true
    },
    {
        name:"Questionnaire",
        img:"./galary/Questionnaire.PNG",
        github_link:"https://github.com/Whatismyusername/studio1",
        live_link:"https://whatismyusername.github.io/studio1/",
        starred:true
    },
    {
        name:"Morse Code Converter",
        img:"./galary/Morse_Code_Converter.PNG",
        github_link:"https://github.com/Whatismyusername/morse_code_converter",
        live_link:"https://whatismyusername.github.io/morse_code_converter/",
        starred:false
    },
    {
        name:"Caesar Cipher Converter",
        img:"./galary/Caesar_Cipher_Converter.PNG",
        github_link:"https://github.com/Whatismyusername/caesar_cipher",
        live_link:"https://whatismyusername.github.io/caesar_cipher/",
        starred:false
    },
    {
        name:"The Handmaid's Tale Chapter 12 Overview",
        img:"./galary/The_Handmaids_Tale.PNG",
        github_link:"https://github.com/Whatismyusername/Handmaids-Tale",
        live_link:"https://whatismyusername.github.io/Handmaids-Tale/",
        starred:true
    },
    {
        name:"The Music App",
        img:"./galary/The_Music_App.PNG",
        github_link:"https://github.com/Whatismyusername/client_project_2018",
        live_link:"https://whatismyusername.github.io/client_project_2018/",
        starred:false
    },
    {
        name:"The Snake",
        img:"./galary/The_Snake.PNG",
        github_link:"https://github.com/Whatismyusername/snake",
        live_link:"https://whatismyusername.github.io/snake/",
        starred:true
    },
    {
        name:"Radar",
        img:"./galary/Radar.PNG",
        github_link:"https://github.com/Whatismyusername/dare_explore_disrupt",
        live_link:"https://whatismyusername.github.io/dare_explore_disrupt/",
        starred:false
    },
    {
        name:"Music Playlist",
        img:"./galary/Music_Playlist.PNG",
        github_link:"https://github.com/Whatismyusername/playlist/tree/gh-pages",
        live_link:"https://whatismyusername.github.io/playlist/html.html",
        starred:false
    },
    {
        name:"Exponential Decay Game",
        img:"./galary/Exponential_Decay_Game.PNG",
        github_link:"https://github.com/Whatismyusername/mathProject-decay",
        live_link:"https://whatismyusername.github.io/mathProject-decay/GameHome.html",
        starred:true
    },
    {
        name:"Pig Latinizer",
        img:"./galary/Pig_Latinizer.PNG",
        github_link:"https://github.com/Whatismyusername/piglatinizer",
        live_link:"https://whatismyusername.github.io/piglatinizer/",
        starred: false
    }
    ];
    
$("document").ready(function(){
    var status = "best";
    function bestProject(){
        var bestProject = [];
        for(var i = 0; i < project.length; i++){
            if(project[i].starred){
                bestProject.push(project[i]);
            } else{
                return;
            }
        }
        console.log(bestProject);
        return bestProject;
    }
    bestProject();
    
    
    displayProject();
    
    var galaryNavTop = $("#galaryNav").offset().top;
    window.onscroll = function(){
        galaryNav();
        
        function galaryNav(){
            if(window.pageYOffset > galaryNavTop){
                document.getElementById("galaryNav").classList.add("sticky");
            }
            if (window.pageYOffset < galaryNavTop) {
                document.getElementById("galaryNav").classList.remove("sticky");
            }
        }
    };
    
    function handler(i){
        window.location.replace(project[i].live_link);
    }
    
    function displayProject(){
        var fullContent;
        
        for(var i = 0; i < project.length; i++){
            var name = "<p class='projectName'>" + project[i].name + "</p>";
            var img = "<img class='widthImg projectImg' src='" + project[i].img + "'>";
            var repo = "<a class='projectRepo' href='" + project[i].github_link + "'>Github Repo</a>";
            var link = "<a class='projectLink' href='" + project[i].live_link + "'>Live Link</a>"
            var starred = "<p>&#9733;</p>";
            if(project[i].starred){
                starred = "<p>&#11088;</p>";
            }
            var id = 'projectDiv_' + i;
            
            let content = "<div class='projectDiv' id=" + id + "' onclick='handler(" + i + ")'>" + name + starred + img + repo + "<br>" + link + "</div>";
            console.log(content);
            fullContent += content;
            
            
        }
        
        $("#project").html(fullContent);
    }
    
    
    $("#btnBest").click(function(){
        alert("This feature is temporarily not available");
    });
    
    
});

