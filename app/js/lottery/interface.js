import $ from 'jquery';

class Interface{
    /**
     * [getOmit 获取遗漏数据]
     * @param {[string} issue [当前期号]
     * @return {[type]} issue [description]
     */
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'./get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res,data);
                    resolve.call(self,res)
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
    /**
     * [getOpenCode 获取开奖号码]
     * @param {[string} issue [期号]
     * @return {[type]} issue [description]
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'./get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);  //1.保存数据2.把对象实例化，在别的对象用时可以起到数据赋值到这个对象上去
                    resolve.call(self,res)
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
    /**
     * [geyState 获取当前状态]
     * @param {string} issue [当前期号]
     * @return {[type]} issue [description]
     */
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'./get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res)
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
}

export default Interface