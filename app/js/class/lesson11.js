{
    let obj={
        time:'2018-10-19',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{
        //拦截对对象属性的读取
        get(target,key){
            return target[key].replace('2018','2017')
        },
        //拦截对象设置属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value
            }else{
                return target[key]
            }
        },
        //拦截key in object操作
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                return false
            }
        },
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        },
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')  //filter就是过滤函数  Object.keys把原始对象的keys拿出来
        }
    });

    console.log(monitor.time)

    monitor.time='2018';
    monitor.name='Mr.Wang';
    console.log(monitor.time,monitor)
    console.log('name' in monitor,'time' in monitor)

    // delete monitor.time
    // console.log(monitor);

    // delete monitor._r
    // console.log(monitor);
    console.log(Object.keys(monitor))
}