{
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        time(){
            return '2018-10-22'
        }
    }

    let test=new Test();

    // test.time=function(){
    //     console.log('reset time')
    // }

    console.log(test.time());
}
{
    let typename=function(target,name,descriptor){
        target.myname='hello';
    }

    class Test{

    }

    console.log(Test.myname);
}

{
    let log=(type)=>{
        return function(target,name,descriptor){
            let src_method=descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD{
        show(){
            console.log('ad is show')
        }
        click(){
            console.log('ad is click');
        }
    }

    let ad=new AD();
    ad.show();
    ad.click();
}