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