<template>
    <main>

        <div class="container">

            <h1 class="my-3">Elenco dei post</h1>

            <div class="row row-cols-4">
                <div class="col-4 card-group my-3" v-for="post in posts" :key="post.id">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{post.title}}</h5>
                            <p class="card-text">{{post.content.length > 200 ?post.content.substring(0,200) + "..." : post.content}}</p>
                            <a href="#" class="btn btn-primary">Vai all'articolo</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </main>
</template>

<script>
    export default {
        name: "Main",

        mounted: function(){
            this.getPost();
        },

        data() {
            return {
                posts: [],
            };
        },

        methods:{

            getPost(){
                axios.get('/api/posts')
                    .then(response => {
                        // handle success
                        this.posts = response.data.results;
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    })

            }
        },

    
    }
</script>

<style>

</style>