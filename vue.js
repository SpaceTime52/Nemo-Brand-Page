let fivthApp = new Vue({ //v-on
    el: '#fivthApp',
    data:{ 
        message: 'nemolab',
        curPage: 1,
        pages: [1,2,3,4,5],
        printingServices: [
            {
                serviceName:'문서 출력',
                modalID:'sv_DocuPrint',
                whatPage:1,
                serviceDetail: '비즈니스에 필요한 각종 문서를 고품질 출력합니다. 분당 125페이지',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-01.jpg'
            }, 
            {
                serviceName:'컬러 출력',
                modalID:'sv_ColorPrint',
                whatPage:1,
                serviceDetail: '빠르고 고급스럽게, 다양한 고급재질에 출력하세요. 분당 60페이지',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-02.jpg'
            },  
            {
                serviceName:'고급 제본',
                modalID:'sv_Bindings',
                whatPage:1,
                serviceDetail: '무선제본, 와이어제본, 중철제본, PUR, 양장제본, 고서제본, 바인더',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-03.jpg'
            },   
            {
                serviceName:'대형 출력',
                modalID:'sv_BigPrint',
                whatPage:1,
                serviceDetail: '대량, 소량에 맞춰진 고화질 대형 출력방법을 맞추어 제안합니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-04.jpg'
            },   
            {
                serviceName:'브로슈어&리플렛',
                modalID:'sv_Brochure',
                whatPage:2,
                serviceDetail: '전달하는 메세지와 예산에 맞춰진 최적의 인쇄&출력방법을 제안합니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-05.jpg'
            },  
            {
                serviceName:'카타로그&도서',
                modalID:'sv_Catalog',
                whatPage:2,
                serviceDetail: '책자의 기획부터 온라인 카타로그까지, 기획단계부터 상담을 받아보세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-06.jpg'
            },  
            {
                serviceName:'포스터',
                modalID:'sv_Poster',
                whatPage:2,
                serviceDetail: '기획한 이벤트와 홍보목적, 브랜드에 맞는 멋진 포스터를 만나세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-07.jpg'
            },  
            {
                serviceName:'제안서&보고서',
                modalID:'sv_Proposal',
                whatPage:2,
                serviceDetail: '기업 제안서와 보고서는 보안까지 지켜지는 전문센터에 맡겨주세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-08.jpg'
            },
            {
                serviceName:'명함 인쇄',
                modalID:'sv_Namecard',
                whatPage:3,
                serviceDetail: '200여 종의 다양한 재질, 브랜드에 맞는 디자인부터 빠른 인쇄까지.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-09.jpg'
            }, 
            {
                serviceName:'현수막&배너',
                modalID:'sv_Banners',
                whatPage:3,
                serviceDetail: '현수막, PET 등 용도에 맞는 재질과 최적의 사이즈를 제안합니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-10.jpg'
            },  
            {
                serviceName:'포토월&폼보드패널',
                modalID:'sv_Panels',
                whatPage:3,
                serviceDetail: '포토월과 시상판넬, 행사에 필요한 각종 사인물을 적시에 받아보세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-11.jpg'
            },   
            {
                serviceName:'스티커&시트커팅',
                modalID:'sv_Sheetcut',
                whatPage:3,
                serviceDetail: '20여 종의 다양한재질의 스티커와, 깔끔한 시트커팅은 품격을 높입니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-12.jpg'
            },   
            {
                serviceName:'봉투&초대장',
                modalID:'sv_Envelop',
                whatPage:4,
                serviceDetail: '규격 대봉투, 소봉투, 고품격 비즈니스 초대장과 봉투 디자인&인쇄',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-13.jpg'
            },  
            {
                serviceName:'각종 후가공',
                modalID:'sv_Finishing',
                whatPage:4,
                serviceDetail: '금박(각종 박)과 형압, 접지, 오시, 톰슨(도무송) 등 커스터마이즈',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-14.jpg'
            },  
            {
                serviceName:'쇼핑백&패키지',
                modalID:'sv_Packages',
                whatPage:4,
                serviceDetail: '브랜드의 가치를 높이는 쇼핑백과 패키지를 기획단계부터 함께하세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-15.jpg'
            },  
            {
                serviceName:'노트&바인더',
                modalID:'sv_NoteDiary',
                whatPage:4,
                serviceDetail: '기업의 브랜드를 녹여낸 깔끔한 사무용품으로 기업가치를 높여보세요.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-16.jpg'
            },
            {
                serviceName:'사진&액자',
                modalID:'sv_PhotoFrame',
                whatPage:5,
                serviceDetail: '인화지출력과 프레임액자, 캔버스 출력 등 공간의 가치를 높일 출력물',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-17.jpg'
            }, 
            {
                serviceName:'도장&스탬프',
                modalID:'sv_Stamps',
                whatPage:5,
                serviceDetail: '도장과 업무효율을 높일 수 있는 각종 스탬프를 맞춤제공합니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-18.jpg'
            },  
            {
                serviceName:'판촉물&상패',
                modalID:'sv_PromotionThing',
                whatPage:5,
                serviceDetail: '기업 홍보에 최적화한 저렴하면서 효과적인 1,000여가지 판촉물 제작',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-19.jpg'
            },   
            {
                serviceName:'특수제작&영화소품',
                modalID:'sv_etc',
                whatPage:5,
                serviceDetail: 'KBS, SBS, MBC, JTBC 드라마와 영화의 소품제작을 담당합니다.',
                serviceMoreDetail: '이 서비스는 이렇게 디테일하게 나뉩니다.',
                imageNum: 'printImage-20.jpg'
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