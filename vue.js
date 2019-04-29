

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
                serviceDetail: '비즈니스에 필요한 문서를 출력하여 제공합니다.',
                imageNum: 'printImage01.jpg'
            }, 
            {
                serviceName:'컬러 출력',
                whatPage:1,
                serviceDetail: '1200dpi의 고화질 출력으로 최상의 출력품질을 보여드립니다..',
                imageNum: 'printImage02.jpg'
            },  
            {
                serviceName:'대형 출력',
                whatPage:1,
                serviceDetail: '단 1장이라도 대형 출력으로 빠르게 소량 포스터를 제작해보세요.',
                imageNum: 'printImage03.jpg'
            },   
            {
                serviceName:'고급 제본',
                whatPage:1,
                serviceDetail: '무선, 트윈링(스프링), 중철, PUR 등 기본적인 제본 뿐만 아니라, 실제본, 양장제본 고서제본 등 다양한 제본방법을 적소에 제공합니다.',
                imageNum: 'printImage04.jpg'
            },   
            {
                serviceName:'현수막, 배너',
                whatPage:2,
                serviceDetail: '종이뿐만 아니라 현수막, 배너, 포토월 등 다양한 대형 실사이즈 출력물을 빠르게 제공합니다.',
                imageNum: 'printImage05.jpg'
            },  
            {
                serviceName:'문서 출력6',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage06.jpg'
            },  
            {
                serviceName:'문서 출력7',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage07.jpg'
            },  
            {
                serviceName:'문서 출력8',
                whatPage:2,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage08.jpg'
            },
            {
                serviceName:'문서 출력9',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage09.jpg'
            }, 
            {
                serviceName:'문서 출력10',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage10.jpg'
            },  
            {
                serviceName:'문서 출력11',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage11.jpg'
            },   
            {
                serviceName:'문서 출력12',
                whatPage:3,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage12.jpg'
            },   
            {
                serviceName:'문서 출력13',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage13.jpg'
            },  
            {
                serviceName:'문서 출력14',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage14.jpg'
            },  
            {
                serviceName:'문서 출력15',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage15.jpg'
            },  
            {
                serviceName:'문서 출력16',
                whatPage:4,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage16.jpg'
            },
            {
                serviceName:'문서 출력17',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage17.jpg'
            }, 
            {
                serviceName:'문서 출력18',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage18.jpg'
            },  
            {
                serviceName:'문서 출력19',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage19.jpg'
            },   
            {
                serviceName:'문서 출력20',
                whatPage:5,
                serviceDetail: '문서출력은 이런저런 것입니다.',
                imageNum: 'printImage20.jpg'
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