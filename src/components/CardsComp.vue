<template lang="">
    <div id="card" class="m-3">
        
        <div>
         <img src="https://cdn-images.imagevenue.com/be/69/e9/ME17GCQ3_o.png" alt="pexels-ej-agumbay-6612869.jpg" class="img img-fluid" width={100} height={100} loading="lazy" id="profileImage"/>
        </div>

        <div class="container">
            <span id="userName">{name}</span>
            <br />
            <span id="userReviews" class="small">1 review</span>
            <br />
            <div id="userRating" class="small">
                <div id="stars">
                    <div class="rating">
                        <input value="5" name="rate" id="star5" type="radio" />
                        <label title="text" for="star5"></label>
                        <input value="4" name="rate" id="star4" type="radio" />
                        <label title="text" for="star4"></label>
                        <input value="3" name="rate" id="star3" type="radio" />
                        <label title="text" for="star3"></label>
                        <input value="2" name="rate" id="star2" type="radio" />
                        <label title="text" for="star2"></label>
                        <input value="1" name="rate" id="star1" type="radio" />
                        <label title="text" for="star1"></label>
                    </div>
                </div>
                <span class="small mx-3">a year ago</span>
            </div>
            <div id="userTxt">Awesome website broooo</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#card{
  display: flex;
  max-width: 500px;
  background: linear-gradient(rgb(192, 192, 241), lightblue);
  color: var(--vanillaBlac);
  padding: 2em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.346);
}

#profileImage{
  border-radius: 50%;
}

#userRating{
  display: flex;
}

#userTxt{
  max-height: 85px !important;
  overflow: scroll !important;
}

#stars{
  display: flex;
  justify-content: start;
}

.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
float: right;
cursor: pointer;
font-size: 15px;
}

.rating:not(:checked) > label:before {
content: '★';
color: #ffa723;
}

.rating, label {
color: #ffa723;
}
    
</style>