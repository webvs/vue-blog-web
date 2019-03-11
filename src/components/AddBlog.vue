<template>
<div id="add-blog">

    <h2>添加博客</h2>

    <form action v-if="!submmited">

        <label for>博客标题</label>

        <input type="text" v-model="blog.title" required>

        <label for>博客内容</label>

        <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>

        <div id="checkboxes">

            <label for>vue.js</label>

            <input type="checkbox" name id value="vue.js" v-model="blog.categories">

            <label for>node.js</label>

            <input type="checkbox" name id value="node.js" v-model="blog.categories">

            <label for>react.js</label>

            <input type="checkbox" name id value="react.js" v-model="blog.categories">

            <label for>angular.js</label>

            <input type="checkbox" name id value="angular.js" v-model="blog.categories">

        </div>

            <label for>作者：</label>

            <select name id v-model="blog.author">

                      <option v-for="author in authors" :value="author" :key="author">{{author}}</option>

                    </select>

            <button @click.prevent="post">添加博客</button>

    </form>

    <div>

        <h3 v-if="submmited">你的博客发布成功</h3>

    </div>

    <div id="preview">

        <h3>博客总览</h3>

        <p>博客标题:{{blog.title}}</p>

        <p>{{blog.content}}</p>

        <p>博客分类：</p>

        <ul>

            <li v-for="category in blog.categories" :key="category">{{category}}</li>

        </ul>

        <p>作者：{{blog.author}}</p>

    </div>

    <!-- <div>

                    <!-- 调用组件  -->

    <!-- <draggable element="ul" v-model="list">

            <li v-for="item in list">{{item.name}}</li>

        </draggable> -->

</div>
</template>

<script>
//import draggable from 'vuedraggable';

//http://jsonplaceholder.typicode.com/

//http://jsonplaceholder.typicode.com/posts

export default {

    name: "add-blog",

    data() {

        return {

            blog: {

                title: "",

                content: "",

                categories: [],

                author: ""

            },

            authors: ["tom", "boy", "joe"],

            submmited: false,

        };

    },

    

    methods: {

        post() {

            this.$http

                .post("http://jsonplaceholder.typicode.com/posts", {

                    title: this.blog.title,

                    body: this.blog.title,

                    userId: 1

                })

                .then(data => {

                    console.log(data);

                    this.submmited = true;

                });

        }

    },

    

};
</script>

<style scoped>
#add-blog * {

    box-sizing: border-box;

}

#add-blog {

    margin: 20px auto;

    max-width: 600px;

    padding: 20px;

}

label {

    display: inline-block;

    margin: 20px 0 10px;

}

input[type="text"],

textarea,

select {

    display: block;

    width: 100%;

    padding: 8px;

}

#checkboxes {

    display: inline-block;

    margin-top: 0;

}

#checkboxes input {

    display: inline-block;

    margin-right: 10px;

}

textarea {

    height: 200px;

}

button {

    display: block;

    margin: 20px 0;

    background: crimson;

    color: #fff;

    border: 0;

    padding: 14px;

    border-radius: 4px;

    font-size: 18ox;

    cursor: pointer;

}

#preview {

    padding: 10px 20px;

    border: 1px dotted #ccc;

    margin: 30px 0;

}

h3 {

    margin-top: 10px;

}
</style>
