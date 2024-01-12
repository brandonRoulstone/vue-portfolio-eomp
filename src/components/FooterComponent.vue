<template>

    <footer v-for="footer of $store.state.apiData" v-bind:key="footer.footertxt" class="d-flex justify-content-center">

        <div id="footer" class="container d-flex justify-content-center">

            {{ footer.footertxt }} | All rights reserved | &copy; <p v-html="currentYear"></p>

        </div>

    </footer>
    
</template>

<script>

export default {
    data(){
        return {
            currentYear: new Date().getFullYear(),
        }
    },
    methods : {
        fetchApiData : function(){

            this.$store.dispatch('fetchApiData')

        },
        updateOnceAYear: function(){

            const today = new Date();

            const currentYear = today.getFullYear();

            // Set an interval to check if the current year has changed
            setInterval(() => {

                const newDate = new Date();

                const newYear = newDate.getFullYear();

                if (newYear !== currentYear) {

                    currentYear = newYear; // Update the current year

                }
            }, 24 * 60 * 60 * 1000); // Check every day for a new year
        }
    },
    mounted(){
        this.fetchApiData();
        this.updateOnceAYear(); 
    }
}
</script>

<style scoped>

#footer{
    position: relative;
    /* bottom: 0%; */
    border-top: 1px solid white;
    width: 100%;
    padding-top: 5px;
    color: white;
}

@media (max-width: 380px) {
    #footer{
        font-size: 13px;
    }
}
    
</style>