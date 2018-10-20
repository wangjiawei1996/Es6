{
    //基本定义和生成案例
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
    }
    let v_parent = new Parent('v');
    console.log(v_parent);
}

{
    //继承
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
    }
    class Child extends Parent{

    }
    console.log(new Child());
}

{
    //继承传递参数
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
    }
    class Child extends Parent{
        constructor(name="child"){
            super(name);
            this.type='child';
        }
    }
    console.log(new Child());
}

{
    //setter,getter
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
        get longName(){
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value;
        }
    }

    let v = new Parent()
    console.log(v.longName);
    v.longName='hello';
    console.log(v.longName)
}

{
    //静态方法
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
        static tell(){
            console.log('tell')
        }
    }

    Parent.tell();
}

{
    //静态属性
    class Parent{
        constructor(name='Mr.wang'){
            this.name=name;
        }
        static tell(){
            console.log('tell')
        }
    }
    Parent.type='test';
    console.log(Parent.type);

}