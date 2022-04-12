<template>
    <main>

        <div class="container">

            <div class="row">
                <h1 class="my-3">Elenco dei post</h1>
            </div>

            <div class="row row-cols-4">
                <div class="col-4 card-group my-3" v-for="post in posts" :key="post.id">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{{post.title}}</h5>
                            <p class="card-text font-italic">{{post.content.length > 200 ?post.content.substring(0,200) + "..." : post.content}}</p>
                            <a href="#" class="btn btn-primary">Vai al post</a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row justify-content-center my-5">

                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">

                        <!-- precedente -->
                        <li class="page-item" :class="(currentPage == 1) ? 'disabled' : '' ">
                            <span class="page-link" @click="getPosts(currentPage -1)">Precedente</span>
                        </li>

                        <!-- visualizzo numero di pagina -->
                        <li class="page-item" :class="(page == currentPage) ? 'active' : ''" v-for="page in lastPage" :key="page">
                            <span class="page-link">{{page}}</span>
                        </li>

                        <!-- successivo -->
                        <li class="page-item" :class="(currentPage == lastPage) ? 'disabled' : '' ">
                            <span class="page-link" @click="getPosts(currentPage +1)">Successivo</span>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>

    </main>
</template>

<script>
    export default {
        name: "Main",

        mounted: function(){
            this.getPosts(1);
        },

        data() {
            return {
                posts: [],
                currentPage: 1,
                lastPage: null
            };
        },

        methods:{

            getPosts(RequestpPage){
                axios.get('/api/posts', {
                    "params": {
                        "page":RequestpPage
                    }
                })
                    .then(response => {
                        // handle success
                        this.currentPage = response.data.results.current_page;
                        this.posts = response.data.results.data;
                        this.lastPage = response.data.results.last_page;
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