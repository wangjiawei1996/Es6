{
    let list = new Set();
    list.add(6);
    list.add(8);

    console.log(list.size)
}

{
    let arr = [1,2,3,4,5]
    let list = new Set(arr)

    console.log(list.size)
}

{
    let arr = [1,2,3,4,1,2]
    let list = new Set(arr)

    console.log(list)
}

{
    let arr = ['add','delete','clear','has']
    let list = new Set(arr)

    console.log(list.has('delete'))
    console.log(list.delete('add'),list);
    list.clear();
    console.log(list)
}

{
    let arr = ['add','delete','clear','has']
    let list = new Set(arr)

    for(let key of list.keys()){
        console.log(key)
    }
    for(let value of list.values()){
        console.log(value)
    }
    for(let [key,value] of list.entries()){
        console.log(key,value)
    }
    list.forEach(function(item){
        console.log(item)
    })
}

{
    let WeakList = new WeakSet();

    let arg={};
    WeakList.add(arg)
    console.log(WeakList)
}

{
    let map = new Map();
    let arr = ['123']
    map.set(arr,456)
    console.log(map,map.get(arr))
}

{
    let map = new Map([['a',123],['b',456]])
    console.log(map)
    console.log(map.size)
    console.log(map.delete('a'),map)
}

{
    let weakmap = new WeakMap();

    let o={};
    weakmap.set(o,123)
    console.log(weakmap.get(o));
}

{
    let map = new Map();
    let array = [];
    map.set('t',1)
    array.push({t:1})

    console.info(map,array)

    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t)
    console.info(map_exist,array_exist);

    map.set('t',2)
    array.forEach(item=>item.t?item.t=2:'');
    console.info(map,array)

    map.delete('t');
    let index = array.findIndex(item=>item.t)
    array.splice(index,1)
    console.info(map,array)


}

{
    let set = new Set();
    let array=[];

    set.add({t:1})
    array.push({t:1})

    console.log(set,array)

    let set_exist=set.has({t:1})
    let array_exist = array.find(item=>item.t)
    console.info(set_exist,array_exist)

    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log(set,array)

    set.forEach(item=>item.t?set.delete(item):'')
    let index = array.findIndex(item=>item.t)
    array.splice(index,1)
    console.info(set,array)
}

{
    let item={t:1}
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t',1)
    set.add(item)
    obj['t']=1;

    console.log(map,set,obj)

    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2);
    item.t = 2;
    obj['t']=2;
    console.log(map,set,obj)

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map,set,obj)
}