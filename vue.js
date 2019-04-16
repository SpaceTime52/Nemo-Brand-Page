

let firstApp = new Vue({
    el: '#firstApp',
    data: {
        message: 'WELCOME TO NEMOLAB',
        visible: false
    }
});

let secondApp = new Vue({
    el: '#secondApp',
    data: {
        message: 'WELCOME TO NEMOLAB',
        visible: true
    }
});

let thirdApp = new Vue({
    el: '#thirdApp',
    data: {
        numbers:[1,2,3,4,5,6,7]
    }
});

let fourthApp = new Vue({ //v-on
    el: '#fourthApp',
    data:{ 
        counter:0
    },
    methods:{
        greet: function(){
            alert('Hello'+this.counter+'번째 stranger');
        }
    },
    created:function(){
        console.log('created');
    },
    beforeUpdate:function(){
        console.log(this.counter);
        console.log('beforeupdate');
    },
    updated:function(){
        console.log(this.counter);
        console.log('updated');
    }
});

let fivththApp = new Vue({ //v-on
    el: '#fivthApp',
    data:{ 
        curPage: 'page1',
        pages: ['page1','page2','page3','page4','page5','page6','page7','page8']
    },
    methods:{
        greet: function(){
            alert('Hello'+this.counter+'번째 stranger');
        }
    },
    created:function(){
        console.log('created');
    },
    beforeUpdate:function(){
        console.log(this.counter);
        console.log('beforeupdate');
    },
    updated:function(){
        console.log(this.counter);
        console.log('updated');
    }
});

let cardApp = new Vue({ //v-on
    el: '#cardApp',
    data:{ 

        visible1: true,
        visible2: true,
        visible3: true

    }
});