var arr1 = [
    { commodid:1, name:"黑鲨游戏 Type-C 耳机",page:99,img:"img/shopping/1.jpg",like:1465},
    { commodid:2, name:"米家驱蚊器 智能版",page:59,img:"img/shopping/2.webp",like:97000},
    { commodid:3, name:"米家直流变频落地扇1X",page:299,img:"img/shopping/3.webp",like:124000},
    { commodid:4, name:"手机USB micro 数据线",page:9.9,img:"img/shopping/4.jpg",like:432000},
    { commodid:5, name:"米家IH电饭煲 4L",page:449,img:"img/shopping/5.webp",like:430000},
    { commodid:6, name:"米家电饭煲4L",page:249,img:"img/shopping/6.webp",like:72000},
    { commodid:7, name:"米家洗烘一体机Pro",page:2999,img:"img/shopping/7.webp",like:24000},
    { commodid:8, name:"米家照片打印机",page:479,img:"img/shopping/8.webp",like:84000},
    { commodid:9, name:"小米巨能写中性笔10支装",page:9.99,img:"img/shopping/9.webp",like:1098000},
    { commodid:10,name:"米家互联网燃气灶",page:799,img:"img/shopping/10.webp",like:71000},
]

new Vue({
    el:".App",
    data:{
        list:arr1,
        comd:[
           // {commodid:1, name:"黑鲨游戏 Type-C 耳机",page:99,widthnum:2,img:"img/shopping/1.jpg", onclickde:true}
        ],
		delModalStyle:{
			zIndex: -1,
			opacity: 0,
			top:"-25px"
		},
		delIndex:-1,
		delModalshow:false,
		mosgModel:{
			isShow:false,
			content:""
		}
    },
    methods: {
        addcls:function(goods){
            
            for(let s of this.comd){
                if(s.commodid == goods.commodid){
                    return;
                }
            }

            var g={};
            g.commodid = goods.commodid
            g.name = goods.name;
            g.page = goods.page;
            g.img = goods.img;
            g.widthnum = 1;
            g.onclickde = true;
            this.comd.push(g);
        },
		delGoods:function(){
			this.comd.splice(this.delIndex,1);
			this.closeModal();
		},
		
		
		
		numPlus:function(g){
			if(g.widthnum>=20){
				this.mosgModel.content="购买数量不能大于20";
				this.mosgModel.isShow=true;
			}else{g.widthnum++;}
		},
		numer:function(g){
			if(g.widthnum<=1){
				this.mosgModel.content="购买数量不能小于0";
				this.mosgModel.isShow=true;
			}else{g.widthnum--;}
		},
		numChange:function(e,g){
			var value = e.target.value
			if(isNaN(value*1)){
				this.mosgModel.content="购买数量只能是数字";
				this.mosgModel.isShow=true;
				return;
			}
			if(parseInt(value)!=value){
				this.mosgModel.content="只能购买整件数";
				this.mosgModel.isShow=true;
				return;
			}
			if(value<=0){
				this.mosgModel.content="购买数量不能小于0";
				this.mosgModel.isShow=true;
				return;
			}
			if(value>20){
				this.mosgModel.content="购买数量不能大于20";
				this.mosgModel.isShow=true;
				return;
			}
			g.widthnum=value;
		},
		delGoodsShow:function(i){
			this.delIndex=i;
			this.delModalStyle.zIndex=999;
			this.delModalStyle.opacity=1;
			this.delModalStyle.top="0px";
		},
		closeModal:function(){
			this.delModalStyle.zIndex=-1;
			this.delModalStyle.opacity=0;
			this.delModalStyle.top="-15px";
		},
        clickall:function(){
            if (this.ischeckall) {
                for(let s of this.comd){
                    s.onclickde = false;
                }
            } else {
                for(let s of this.comd){

                    s.onclickde = true;
                }
                
            }
        }
    },
    computed: {
        ischeckall:function(){
            var i = 0;
            for(let s of this.comd){
                if (s.onclickde) {
                    i++;
                }
            }
            if (i==this.comd.length) {
                return true;
            } else {
                return false;
            }
        },
		isAllCount:function(){
			var count = 0;
			for (let s of this.comd) {
				count+=s.widthnum;
			}
			return count;
		},
		CheckAllCount:function(){
			var count = 0;
			for(let s of this.comd){
				if(s.onclickde){
					count+=s.widthnum;
				}
			}
			return count;
		},
		totalPrice:function(){
			var price = 0;
			for(let s of this.comd){
				if(s.onclickde){
					price+=s.page*s.widthnum
				}
			}
			return Number(price.toFixed(1));
		}
    }	
})