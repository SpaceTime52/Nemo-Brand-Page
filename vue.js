

// let firstApp = new Vue({
//     el: '#firstApp',
//     data: {
//         message: 'WELCOME TO NEMOLAB',
//         visible: false
//     }
// });

// let secondApp = new Vue({
//     el: '#secondApp',
//     data: {
//         message: 'WELCOME TO NEMOLAB',
//         visible: true
//     }
// });

// let thirdApp = new Vue({
//     el: '#thirdApp',
//     data: {
//         numbers:[1,2,3,4,5,6,7]
//     }
// });

// let fourthApp = new Vue({ //v-on
//     el: '#fourthApp',
//     data:{ 
//         counter:0
//     },
//     methods:{
//         greet: function(){
//             alert('Hello'+this.counter+'번째 stranger');
//         }
//     },
//     created:function(){
//         console.log('created');
//     },
//     beforeUpdate:function(){
//         console.log(this.counter);
//         console.log('beforeupdate');
//     },
//     updated:function(){
//         console.log(this.counter);
//         console.log('updated');
//     }
// });

let fivthApp = new Vue({ //v-on
    el: '#fivthApp',
    data:{ 
        message: 'nemolab',
        curPage: 1,
        pages: [1,2,3,4,5],
        printingServices: [
            {
                serviceName:'문서 출력',
                whatPage:1,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            }, 
            {
                serviceName:'고급 제본',
                whatPage:1,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력3',
                whatPage:1,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },   
            {
                serviceName:'문서 출력4',
                whatPage:1,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },   
            {
                serviceName:'문서 출력5',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력6',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력7',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력8',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },
            {
                serviceName:'문서 출력9',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            }, 
            {
                serviceName:'문서 출력10',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력11',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },   
            {
                serviceName:'문서 출력12',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },   
            {
                serviceName:'문서 출력13',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력14',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력15',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력16',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },
            {
                serviceName:'문서 출력17',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            }, 
            {
                serviceName:'문서 출력18',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },  
            {
                serviceName:'문서 출력19',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            },   
            {
                serviceName:'문서 출력20',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
            }
        ]   
    },
    methods:{
        curPageNext: function(){

            if(this.curPage == 5){
                this.curPage = 1
            }else{
                this.curPage = this.curPage+1
            }

        },
        curPagePrevious: function(){

            if(this.curPage == 1){
                this.curPage = 5
            }else{
                this.curPage = this.curPage-1
            }

        },
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

// let cardApp = new Vue({ //v-on
//     el: '#cardApp',
//     data:{ 

//         visible1: true,
//         visible2: true,
//         visible3: true

//     }
// });