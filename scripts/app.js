"use strict";
// Samreet Singh Sandhu
// 100855948
//rujul mavani
//100853906
// Date completed: 25-01-2023
(function(){

    function DisplayHomePage(){
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function (){
           location.href = "about.html"
        });

        // STEP 3
        let MainContent = document.getElementsByTagName("main")[0];

        // STEP 4
        let MainParagraph = document.createElement("p");

        //STEP 5
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the main paragraph";

        //STEP 6
        MainContent.appendChild(MainParagraph);

        //STEP 7

        let SecondString = "We as a team are very thrilled to welcome you in our little website.";
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);
        let DocumentBody = document.getElementsByTagName("body")[0];
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";

    }


    function DisplayProjectsPage() {
        let DocumentBody = document.getElementsByTagName("body")[0];
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";
        let Element = document.createElement("p");



    }
    function DisplayServicesPage(){
        let DocumentBody = document.getElementsByTagName("body")[0];
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";


    }

    function DisplayAboutUsPage(){
        let DocumentBody = document.getElementsByTagName("body")[0];
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";


    }

    function DisplayContactPage(){
        let DocumentBody = document.getElementsByTagName("body")[0];
        DocumentBody.style.backgroundImage = "url('Images/background.jpg')";


    }

    function Start(){
        console.log("App Started!")
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Projects":
                DisplayProjectsPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start)

})()