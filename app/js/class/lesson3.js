{
    let regex=new RegExp('xyz','i');
    let regex2=new RegExp(/xyz/i);

    console.log(regex.test('xyz123'),regex2.test('xyz123'));

    let regex3=new RegExp(/xyz/ig,'i');
    console.log(regex3.flags)
}

{
    let s="bbb_BB_b";
    let a1=/b+/g;
    let a2=/b+/y;

    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky);
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));

    console.log(`\u{20BB7}`);

    let s='𠮷';

    console.log('u',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s));

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
}