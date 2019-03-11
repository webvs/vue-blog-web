<template>
    <div v-theme:column="'small'" id="show-blogs">
            <h1>博客总览</h1>
            <input type="text" v-model="search" placeholder="请输入">
            <div v-for="blog in fliterdBlogs" class="single-blog">
                    <router-link :to="'/blog/'+blog.id">
                    <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
                    <article>
                        {{blog.body | snippet}}
                    </article>
                    </router-link>
            </div>
    </div>

</template>
<script>
export default {
    name:'show-blogs',
    data(){
        return{
            blogs:[],
            search:'',
        }
    },
    created(){
        //this.$http.get('http://jsonplaceholder.typicode.com/posts')
        //this.$http.get('../assets/post.json') json文件不能放在静态文件下
        this.$http.get('./../static/post.json')  //获取本地环境
        .then(function(data){
           this.blogs= data.body.slice(0,10);
            console.log(this.blogs);

        })
    },
    //输入的时候得忽略过滤条件 
    computed:{
        fliterdBlogs:function(){
             //es6 filter
             return this.blogs.filter(blog =>{ //箭头函数
                 return blog.title.match(this.search);//es6 match
             })
        }
    },
    filters:{ //自定义指令 非全局
        // 'to-uppercase':function(value){
        //     return value.toUpperCase();
        // },
        toUpperCase(value){
                return value.toUpperCase();
        }
    }
}
</script> 

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
