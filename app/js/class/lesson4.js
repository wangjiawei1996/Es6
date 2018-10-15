{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`);

    console.log('s',`\u{20BB7}`);

}

{
    let s='𠮷';
    console.log('length',s.length)
    console.log('0',s.charAt(0))
    console.log('1',s.charAt(1))
    console.log('at0',s.charCodeAt(0))
    console.log('at1',s.charCodeAt(1))

    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));
    console.log('code0',s1.codePointAt(0).toString(16));

}

{
    console.log(String.fromCharCode('0x20BB7'));
    console.log(String.fromCodePoint('0x20BB7'));
}

{
    let str='\u{20BB7}abc';
    for (let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code)
    }
}