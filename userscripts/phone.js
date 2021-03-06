// ==UserScript==
// @name          Facebook Messanger Nice, Tidy and more responsive
// @namespace     http://userstyles.org
// @description	  Simple CSS that hides left toolbar from new Facebook Messenger (and open it on hover) and allow to make new chat a lot smaller
// @author        Krzychu
// @homepage      https://userstyles.org/styles/112567
// @include       https://www.messenger.com/*
// @include       http://www.messenger.com/*
// @run-at        document-start
// @version       0.20150418220911
// ==/UserScript==
(function() {var css = [ "* {\nfont-family: \"Ubuntu\" !important;\nfont-size: 16pt !important; \nline-height: 1 !important}",
        " ",
        "._1enh {",	
	"  z-index: 1000;",
	"  width: 200px !important;",
        "  min-width: 190px !important;",
        "  max-width: 210px !important;",
	"  background: white;",
	"  border-right: 4px solid rgba(0, 0, 0, .10);",
	"  transform: translate(1px);",	
	"}",
        "",
        "._1t_q ._1t_r, ._1t_q ._4ldz, ._1t_q ._4ld-, ._1t_q ._4ld- img {",
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;",
        "}",
        "",
        "._2jnt {",
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;",
        "}",
        "",
        "._1t_s {",
        "  margin-left: 16px !important;", 
        "}",
	"",
        "._s15 {",
        "  height: 1px !important;", 
        "}",
        "",
        "._3rh8 {",
        "  height: 0px !important;",
        "  opacity: 0 !important;", 
        "}",
        "",
        "._1ht1 {",
        "  height: 150px !important;",
        "}",
        "",
        "._1ht6 {",
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;",
        "}",
        "",
        "._36ic {",
        "  height: 120px !important;", 
        "  padding-right: 28px !important;",
        "}",
        "",
        "._5742 {",
        "  height: 120px !important;", 
        "}",
        "",
        "._43di {",
        "  transform: scale(2) !important;",  
        "  margin-bottom: 50px !important;", 
        "}",
        "",
        "._43dh {",
        "  font-size: 48px !important;",   
        "}",
        "._43dj {",
        "  transform: scale(2) !important;",  
        "}",
        "",
        "._2fug {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
//contact avatars
        "._4ld- {",
        "  transform: scale(2.4) !important;", 
        "  margin-left: 60px !important;", 
        "  margin-top: 10px !important;",  
        "  margin-bottom: 10px !important;", 
        "}",
        "",
        "._2pon {",
        "  transform: scale(2.4) !important;", 
        "  margin-left: 96px !important;",  
        "}",
        "",
        "._1htf {", 
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;", 
        "}",
        "",
        "._1ht7 {", 
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;", 
        "}",
        "",
        "._42ef {", 
        "  margin-left: 180px !important;",  
        "}",
        "",
        "._ohe {", 
        "  margin-left: 0px !important;", 
        "  margin-top: 30px !important;", 
        "}",
        "",
        "._2poz {",
        "  transform: scale(1.4) !important;",  
        "  margin: 80px 50px 80px 50px !important;",      
        "}",
        "",
        "._jf2 {",
        "  transform: scale(2.2) !important;",
        "  margin-top: 16px !important;", 
        "}",
        "",
        "._3d85 {",
        "  max-height: 0px !important;",
        "  max-width: 0px !important;",
        "  opacity: 0 !important;",  
        "}", 
        "",
        "._5bli {",
        "  transform: scale(2.2) !important;",
        "  margin-top: -16px !important;", 
        "}",       
        "",
        "._4rv7 {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
        "._2oc8 {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
        "._31tl {",
        "  transform: scale(2.2) !important;",
        "}",
//call, video call
        "",
        "._fl2 a {",
        "  transform: scale(2.2) !important;",
        "}",

//record audio
        "",
        "._4rv7 {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
        "._4rv9 {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
        "._yht {",
        "  transform: scale(2.2) !important;",
        "}",
        "",
        ".uiContextualLayer {",
        "  transform: scale(2) !important;", 
        "  margin: 80px 80px 80px 80px !important;",
        "}",
        "",
        "._53il {",
        " padding-top: 10px !important;",
        "}",
        "",
        "._54ng {",
        "  font-size: 14pt !important;", 
        "  margin-left: 180px !important;",
        "  margin-top: 180px !important;",
        "}",
        "",
        "._53ij {",
        "  font-size: 14pt !important;", 
        "  margin-left: 20px !important;",
        "}",

        "",
        "._2oc8 {",
        "  margin-top: 20px !important;",
        "}",
        "",
        "._2fug {",
        "  margin-left: 20px !important;", 
        "  margin-top: 20px !important;",  
        "}",
        "",
        "._fl2 {",
        "  width: 260px !important;",  
        "  padding-left: 20px !important;",
        "  padding-bottom: 56px !important;",
        "  margin-rigth: 60px !important;",
        "}",
        "",
        "._fl2 li {",
        "  margin-right: 40px !important;",
        "}",
        "",
        "._1tqi {",
        "  font-size: 1pt !important;", 
        "  opacity: 0 !important;",
        "}",
        "",
        "._2v6o {",
        "  font-size: 24pt !important;", 
        "}",

//full text area
        "",
        "._4rv3 {",
        " height: 180px !important;",
        "}",
        "",
        "._5irm {",
        "  width: 500px !important;",
        "  height: 80px !important;",
        "  transform: translate(0px,50px);",
        "}",
//write new text message
        "",
        "._1p1v {",
        "  padding-left: 10px !important;",
        "}",
//text area
        "",
        "._kmc {",
        "  transform: scale(2) !important;",
        "  padding-left: 90px !important;",
        "  border-radius: 10px  !important;",
        "  background-color: #EEEEEE !important;",
        "}",
//text
        "",
        "._3oh- {",
        "  font-size: 34pt !important;", 
        "}",
        "",
        "._hh7 a {",
        "  font-size: 34pt !important;", 
        "}",
//text atribute
        "",
        " ._1mf {",
        "  white-space: normal !important;",
        "}",
//emoji
        "",
        "._2560 {",
        "  transform: scale(2.2) !important;",
        "}",
//area: photos upload, stickers, emoji, gifs
        "",
        "._4rv4 {",
        "  display: block !important;",
        "  min-width: 200px !important;",
        "  width: 210px !important;",
        "  height: 160px !important;",
        "  transform: translate(200px, -20px);",       
        "}",
        "",
        "._4rv4 li {",
        "  margin-top: 20px !important;",
        "}",
//attach image
        "",
        "._vzk {",
        "  transform: scale(2.2) !important;",
        "}",
//stickers
        "",
        "._4rv6 {",
        "  transform: scale(2.2) !important;",
        "  margin-left: 16px !important;",
        "}",
//gifs
       "",
       "._yht {",     
       "  margin-left: 24px !important;",
       "}",
//micro
        "",
        "._4rv7 {",          
        "  width: 0px !important;",
        "  pading-right: 0px !important;",
        "  margin: 0px 0px 0px 0px !important;",  
        "}",
//games
        "",
        " ._4ce_ {",
        "  transform: scale(2.5) !important;",
        "  margin-left: 28px !important;",
        "}",
//games dialog
        "",
        " ._4lh2 {",
        "  width: 200px !important;",
        "}",
//elements inside games dialog
        "",
        " ._4lha {",
        "  margin-left: 60px !important;",
        "}",
        "",
        " ._4ld- {",
        "  margin-left: 40px !important;",
        "}",
        "",
        " ._30vt {",
        "  margin-left: -20px !important;",
        "}",

//selected chat emoji
       "",
       "._4rv9 {",
       "  margin-top: 30px !important;",
       "}",
//send button
       "",
       "._38lh {",
       "  transform: scale(1.8) !important;",
       "  margin-top: 36px !important;",
       "  margin-left: 20px !important;",
       "}",
//native emoji button
        "",
        "._5s2p {",
        "  width: 0px !important;",
        "  pading-right: 0px !important;",
        "  margin-right: 0px !important;",  
        "}",
//camera button
        "",
        "._4rv5 {",
        "  width: 0px !important;",
        "  pading-right: 0px !important;",
        "  margin: 0px 0px 0px 0px !important;",  
        "}",
        "",
        "._58al {",
        "  height: 60px !important;",
        "  pading: 0px 0px 0px 0px !important;", 
        "}",
	"",
	"._1ht3 {",
	"  background-color: #CFE8FF !important;",
	"  }",


].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();



