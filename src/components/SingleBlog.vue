<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="item in blog.categories" :key="item">
                {{item}}
            </li>
        </ul>
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
        this.$http.get('https://wd9712169819gawpax.wilddogio.com/posts/'+this.id+'.json')
        .then(function(data){
            console.log(data.json());
          //  this.blog=data.body;
          return data.json()

        })
        .then(function(data){
            this.blog=data;
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


