webpackJsonp([60468129365276],{4203:function(e,t){e.exports={data:{challengeNode:{title:"Comment out HTML",description:["Remember that in order to start a comment, you need to use <code>&#60;!--</code> and to end a comment, you need to use <code>--&#62;</code>","Here you'll need to end the comment before your <code>h2</code> element begins.","<hr>","Comment out your <code>h1</code> element and your <code>p</code> element, but not your <code>h2</code> element."],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/comment-out-html",blockName:"Basic HTML and HTML5",tests:[{text:"Comment out your <code>h1</code> element so that it is not visible on your page.",testString:"assert(($(\"h1\").length === 0), 'Comment out your <code>h1</code> element so that it is not visible on your page.');"},{text:"Leave your <code>h2</code> element uncommented so that it is visible on your page.",testString:"assert(($(\"h2\").length > 0), 'Leave your <code>h2</code> element uncommented so that it is visible on your page.');"},{text:"Comment out your <code>p</code> element so that it is not visible on your page.",testString:"assert(($(\"p\").length === 0), 'Comment out your <code>p</code> element so that it is not visible on your page.');"},{text:"Be sure to close each of your comments with <code>--&#62;</code>.",testString:"assert(code.match(/[^fc]-->/g).length > 1, 'Be sure to close each of your comments with <code>--&#62;</code>.');"},{text:"Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.",testString:'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , \'Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<!--\n<h1>Hello World</h1>\n\n<h2>CatPhotoApp</h2>\n\n<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>\n-->",head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/delete-html-elements",id:"bad87fee1348bd9aedf08804"},slug:"/responsive-web-design/basic-html-and-html5/comment-out-html"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-comment-out-html-528e900c530d4816ce0d.js.map