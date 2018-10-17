{
    function test(x,y="world"){
        console.log('默认值',x,y)
    }
    test("Hello")
    test("Hello","kill")
}

{
    let x="test"
    function test(c,y=x){
        console.log("作用域",c,y)
    }
    test("kill")
}

{
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test3(1,2,3,4,'a')
}

{
    console.log(...[1,2,4])
}

{
    let arraw = v =>v*2;
    let arraw2 = () => 5
    console.log('arraw',arraw(3))
    console.log(arraw2())
}

{
    function test(x){
        console.log('tail',x)
    }
    function fx(x){
        return test(x);
    }
    fx(123)
}