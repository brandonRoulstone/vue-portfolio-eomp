<template>
    <section id="bgBody">
        <div class="container px-4 py-5 gap-3" id="hanging-icons">
            <h2 class="pb-2 display-4 text-black pt-5">Education History</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-1">

                <div class="col d-flex align-items-start justify-content-center py-5 px-3" id="bgCard2">
                    <div class="icon-square bg-light px-3 py-3 rounded-5 shadow text-dark flex-shrink-0 me-3 border border-black">
                        <i class="fa-solid fa-building-columns fa-lg" style="color: #000000;"></i>
                    </div>
                    <div id="bcgsm" class="py-4 px-4 shadow">
                        <h2>Life Choices Academy</h2>
                        <p>Graduated in 2024 - Cohort-13</p>
                    </div>
                </div>

                <div class="col d-flex align-items-start justify-content-center py-5 px-3" id="bgCard1">
                    <div class="icon-square bg-light px-3 py-3 rounded-5 text-dark flex-shrink-0 me-3 border border-black">
                        <i class="fa-solid fa-school fa-lg" style="color: #000000;"></i>
                    </div>
                    <div id="bcgsm" class="py-4 px-4 shadow">
                        <h2>Heathfield High School</h2>
                        <p>Matriculated in 2021</p>
                    </div>
                </div>
            </div>

            <a href="#bgSection"><button class="btn btn-outline-dark px-3 py-3">Job experience</button></a>
        </div>
    </section>
    <section id="bgSection">
        <div class="container px-4 py-5 gap-3" id="hanging-icons">
            <h2 class="pb-2 display-4 text-black">Work History</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-1">

                <div class="col d-flex align-items-start justify-content-center py-5 px-3" id="bgCard2">
                    <div class="icon-square bg-light px-3 py-3 rounded-5 shadow text-dark flex-shrink-0 me-3 border border-black">
                        <i class="fa-solid fa-code fa-lg" style="color: #000000;"></i>
                    </div>
                    <div id="bcgsm" class="py-4 px-4 shadow">
                        <h2>Life Choices Studio</h2>
                        <p>During my time as an intern in LCS as a web Developer I got the chance to work in a team and I obtained soft skills like team work,and comminication skills which enabled me to be more resilient, and utilized my time managment effectively.At the time at lcs I got to learn new technologies like C++ and python and use it in real time and made me me more proficient in the development sector</p>
                    </div>
                </div>

                <div class="col d-flex align-items-start justify-content-center py-5 px-3" id="bgCard1">
                    <div class="icon-square bg-light px-3 py-3 rounded-5 text-dark flex-shrink-0 me-3 border border-black">
                        <i class="fa-solid fa-code fa-lg" style="color: #000000;"></i>
                    </div>
                    <div id="bcgsm" class="py-4 px-4 shadow">
                        <h2>Freelancer</h2>
                        <p>I built websites using Vue Js and React Js and using Node Js as my backend for client websites, I am proficient in these two frontend end frameworks, which I picked up on my way in my freelancing journey, I gained soft skills like nogotiating,team work and communication from this work journey</p>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #bgBody{
        display: flex;
        justify-content: center;
        min-height: 100vh;
        align-items: center;
        background-image: url('https://cdn-images.imagevenue.com/35/3a/73/ME17ZUC6_o.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0), rgb(255, 255, 255));
    }

    #bgSection{
        display: flex;
        justify-content: center;
        min-height: 100vh;
        align-items: center;
        background-image: url('https://cdn-images.imagevenue.com/02/2c/38/ME17YYZ8_o.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-image: fill 0 linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));

    }

    #bgCard1, #bgCard2{
        background: rgba(255, 183, 0, 0.522) !important;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius: 15px;
    }

    #bcgsm{
        background: rgba(255, 255, 252, 0.074) !important;
        border-radius: 15px;
    }
    /* #bcgsm:hover{
        transform: scale(110%);
        transition: 0.3s ease-in-out;
    } */
</style>