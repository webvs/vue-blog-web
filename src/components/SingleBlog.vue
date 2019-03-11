<template>
    <div id="single-blog">
        {{blog.body}}
    </div>
</template>
<script>
export default {
    name:"single-blog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
            console.log(data);
            this.blog=data.body;
        })
    }
}
</script>
<style scoped>

    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #333;
    }
</style>


