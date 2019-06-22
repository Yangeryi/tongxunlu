$(function () {
    let arr=[
        {
            name:"成铭铭",tel:15835699857,py:"chengmingming"
        },
        {
            name:"杨欣",tel:18406586055,py:"yangxin"
        },
        {
            name:"张振华",tel:15834785678,py:"zhangzhenhua"
        },
        {
            name:"张毓",tel:18867342989,py:"zhangyu"
        },
        {
            name:"杨二一",tel:13748739855,py:"yangeryi"
        },
        {
            name:"荣艺煊",tel:13589901241,py:"rongyixuan"
        },
        {
            name:"王若璇",tel:18406576057,py:"wangruoxuan"
        },
        {
            name:"姜雨杏",tel:18406543418,py:"jiangyuxing"
        },
        {
            name:"高心愿",tel:15579391234,py:"gaoxinyuan"
        },
        {
            name:"孙聪",tel:13958893213 ,py:"suncong"
        },
    ]
    let main=$("main");
    let aside=$(".aside");
    let input=$("input");
    input.on("input",function () {
        let val=$(this).val();
        let newarr=arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
        render(newarr)
    })
    render(arr);
    function render(arr){
        let person=[];
        main.empty();
        aside.empty();
        arr.forEach(ele=>{
            let firstChar = ele.py.charAt(0).toUpperCase();
            if(!person[firstChar]){
                person[firstChar]=[];
            }
            person[firstChar].push(ele);
            console.log(person);
        })

        let html=``;
        let html1=``;
        let keysarr=Object.keys(person).sort();
        console.log(keysarr);

        for(let i=0;i<keysarr.length;i++){
            let ele=keysarr[i];
            html+=`
                <section><h3>${ele}</h3>
            `;
            html1+=`<li>${ele}</li>`
            for(let j=0;j<person[ele].length;j++){
                let info=person[ele][j];
                html+=`
                <div><a href="tel:${info.tel}">${info.name}</a></div>
                `;
            }
            html+=`</section>`
        }
        aside.html(html1)
        main.html(html)
    }
})