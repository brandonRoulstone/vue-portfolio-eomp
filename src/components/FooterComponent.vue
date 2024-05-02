<template>

    <footer v-for="footer of $store.state.apiData" v-bind:key="footer.footertxt" class="d-flex justify-content-center bg-white">

        <div class="container py-2 py-md-3 px-4 px-md-3 text-body-secondary bg-white">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" aria-label="Bootstrap">
                        <!-- <img src="https://cdn-images.imagevenue.com/2e/77/c7/ME17UWJX_o.png" alt="" width="50" height="32" class="d-block me-2"/> -->
                        <a class="navbar-brand" href="/">
                            <img 
                            src="https://cdn-images.imagevenue.com/a1/b3/d4/ME17XQIF_o.png" 
                            alt="Brandon_official_logo" 
                            id="imgLogo"
                            class="d-block me-2 rounded-5"
                            loading="lazy"
                            width="50"
                            height="50"
                            >
                            </a>
                        <span class="fs-5 text-black border-bottom">Brandon's portfolio</span>
                    </a>
                    <ul class="list-unstyled small">
                        <li class="mb-2 text-black">{{ footer.footertxt }} &copy; <span v-html="currentYear"></span></li>
                    </ul>
                </div>
            </div>
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
    
</style>