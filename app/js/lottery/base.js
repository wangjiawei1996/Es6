import $ from 'jquery';
class Base{
    /**
     * [initPlayList 初始化奖金和玩法的说明]
     * @return {[type]} 
     */
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
            name:'任二'
        })
        .set('r3',{
            bonus:19,
            tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
            name:'任三'
          })
          .set('r4',{
            bonus:78,
            tip:'从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
            name:'任四'
          })
          .set('r5',{
            bonus:540,
            tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
            name:'任五'
          })
          .set('r6',{
            bonus:90,
            tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
            name:'任六'
          })
          .set('r7',{
            bonus:26,
            tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
            name:'任七'
          })
          .set('r8',{
            bonus:9,
            tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
            name:'任八'
        })
    }
    initNumber(){
        for(let i=0;i<12;i++){
            this.number.add((''+i).padStart(2,'0'))  //保持两位竖的长度，如果不够就在前面补0
        }
    }
    /**
     * setOmit [设置遗漏数据]
     * @param {*} omit 
     */
    setOmit(omit){
        let self = this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item)
        }
        $(self.omit_el).each(function(index,item){
            $(item).text(self.omit.get(index))
        });
    }
    /**
     * setOpenCode [设置开奖]
     * @param {*} code 
     */
    setOpenCode(code){
        let self=this;
        self.open_code.clear();
        for(let item of code.valus()){
            self.open_code.add(item);
        }
        self.updateOpenCode&&self.updateOpenCode.call(self,code);
    }
    /**
     * toggleCodeActive [号码选中取消]
     * @param {*} code 
     */
    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }
    /**
     * changePlayNav [改变玩法]
     * @param {*} e 
     */
     changPlayNav(e){
        let self = this;
        let  $cur=$(e,currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play=$cur.attr('desc').toLocaleLowerCase();  //toLocaleLowerCase()这个方法是转化为小写
        $('#zx_sm span').html(self.play_list.get(self.cur_play).tip) //切换不同的任号不同的玩法
        $('.boll-list .btn-boll').removeClass('btn-boll-active'); //将上次的玩法清空
        self.getCount(); 
     }
     /**
      * assistHandle [操作区]
      * @param {*} e 
      */
     assistHandle(e){
        e.preventDefault();
        let self = this;
        let $cur=$(e.currentTarget);
        let index=$cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active'); //将上次的玩法清空
        if(index===0){
            $('.boll-list .btn-boll').addClass('btn-boll-active');
        }
        if(index===1){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-5>0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if(index===2){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-6<0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if(index===3){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==1){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if(index===4){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        self.getCount();
     }
     /**
      * getName [获取当前彩票的名称]
      */
     getName(){
         return this.name
     }
     /**
      * addCode [添加号码]
      */
     addCode(){
         let self=this;
         let $active=$('.boll-list .btn-boll-active').match(/\d{2}/g); //把取出的所有值拿出来
         let active=$active?$active.length:0;
         let count = self.computeCount(active,self.cur_play)  //active当前选中的号码 self.cur_play玩法
         if(count){
             self.addCodeItem($active.join(''),self.cur_play,self.play_list.get(self.cur_play).name,count);
         }
     }
     /**
      * addcodeItem [添加单次号码]
      * @param {*} code 
      * @param {*} type 
      * @param {*} typeName 
      * @param {*} count 
      */
     addCodeItem(code,type,typeName,count){
         let self = this;
         const tpl=`
         <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
		 <div class="code">
			 <b>${typeName}${count>1?'复式':'单式'}</b>
			 <b class="em">${code}</b>
			 [${count}注,<em class="code-list-money">${count*2}</em>元]
		 </div>
	 </li>
        `;
        $(self.cart_el).append(tpl);
        self.getTotal();
     }
}