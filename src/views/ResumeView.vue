<template>
    <div class="container" id="resumeSec">
        <div class="text-white container" id="sideSec">
            <div class="container">
                <img src="https://cdn-images.imagevenue.com/3f/88/26/ME17GE7S_o.png" alt="" class="img img-fluid">
            </div>
            <div class="row text-white mt-4">
                <div class="d-flex justify-content-start mx-4">
                    <i class="fa-solid fa-phone fa-sm mt-2" style="color: #ffffff;"></i>
                    <p class="mx-3 small">069 219 6897</p>
                </div>
                <div class="d-flex justify-content-start mx-4">
                    <i class="fa-solid fa-envelope fa-sm mt-2" style="color: #ffffff;"></i>
                    <p class="mx-3 small">brandonRoulstone465@gmail.com</p>
                </div>
                <div class="d-flex justify-content-start mx-4">
                    <i class="fa-solid fa-location-dot fa-sm mt-2" style="color: #ffffff;"></i>
                    <p class="mx-3 small">1 Mile-end Road, Diep River</p>
                </div>
                <div class="d-flex justify-content-start mx-4">
                    <i class="fa-solid fa-globe fa-sm mt-2" style="color: #ffffff;"></i>
                    <p class="mx-3 small">mySiteName.com</p>
                </div>
            </div>
            <div class="row text-white mt-4">
                <div class="d-flex justify-content-center">
                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">Skills</p>
                </div>
                <div class="d-flex justify-content-start mx-2">
                    <ul class="text-start">
                        <li><p class="small">Web developer</p></li>
                        <li><p class="small">Web designer (Ui/Ux)</p></li>
                        <li><p class="small">JavaScript (ES6)</p></li>
                        <li><p class="small">React Js & Vue Js</p></li>
                        <li><p class="small">Python 3</p></li>
                        <li><p class="small">Git & Github</p></li>
                        <li><p class="small">Html 5, Css 3</p></li>
                    </ul>
                </div>
            </div>
            <div class="row text-white mt-4">
                <div class="d-flex justify-content-center">
                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">Education</p>
                </div>
                <div>
                    <ul class="text-start">

                        <li>Heathfield Secondary School</li>
                        <li class="list-unstyled mx-5 px-3 mb-4">2017-2021</li>

                        <li>Life Choices Academy</li>
                        <li class="list-unstyled mx-5 px-3">2023-2024</li>
                        
                    </ul>
                </div>

            </div>
            <div class="row text-white mt-4">
                <div class="d-flex justify-content-center">
                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">Languages</p>
                </div>
                <div>
                    <ul class="text-start">

                        <li>English</li>
                        <li>Afrikaans</li>

                    </ul>
                </div>

            </div>
        </div>

        <div class="text-black container" id="sideSec2">


            <div id="scrollSec">

                <div id="sideBar" class="container-fluid">
                    <span class="one">....</span>
                    <span id="line">........</span>
                    <span class="two">....</span>
                    <span id="line">........</span>
                    <span class="three">....</span>
                    <span id="line">........</span>
                    <span class="four">....</span>
                </div>

            </div>

            <div class="mt-5 pt-4 border-bottom border-black">
                <h1 class="display-5 text-center">Brandon <br> Roulstone</h1>
                <p class="fw-bold">Web Developer & Designer</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #resumeSec{
        min-height: 135vh;
        display: flex;
        width: 80%;
        justify-content: center;
        margin-bottom: 20px;
    }

    #sideSec{
        background-color: black;
        min-height: 100vh;
        width: 35%;
    }

    #sideSec2{
        background-color: #fff;
        min-height: 100vh;
        width: 100%;
    }

    #sideBar{
        transform: rotateZ(90deg);
        position: absolute;
        top: 100%;
        left: 19%;
        width: 30%;
    }

    #line{
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        transform: rotateZ(90deg);
        color: white;
    }

    .one, .two, .three, .four{
        border: 1px solid black;
        border-radius: 50%;
        color: #fff;
        margin: 30px;
    }
</style>