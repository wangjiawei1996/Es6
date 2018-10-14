{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b)
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6]
  console.log(a,b,rest)
}

{
  let a,b;
  ({a,b}={a:1,b:2});
  console.log(a,b)
}

{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c)
}

{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b)
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b)
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c
  [a,,,b]=f();
  console.log(a,b)
}

{
    function f(){
      return [1,2,3,4,5]
    }
    let a,b,c
    [a,,...b]=f();
    console.log(a,b)
  }
  

  {
    let o={p:32,q:true}
    let {p,q}=o
    console.log(p,q)
  }

  {
    let {a=10,b=3}={a:5}
    console.log(a,b)
  }

  {
    let metaDate={
        title:'abc',
        test:[{
            title:'test',
            decration:"des"
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaDate;
    console.log(esTitle,cnTitle)
  }