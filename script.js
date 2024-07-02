function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) =>{
        if(e.target.id=='close' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}





// const form = document.getElementById('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//       console.log(this)
//     // const data= document.querySelector('#data');
//     // const hora= document.querySelector('#hora');
//     // const logradouro= document.querySelector('logradouro')
//     // const numero= document.querySelector('#number')
//     // const complemento= document.querySelector('#complement')
//     // const bairro= document.querySelector('#bairro')
//     // const uf= document.querySelector('#uf')
//        for(const item of formData.values())
//          console.log(item)

//     })

//     console.log(form)



    var btnAgendar = document.querySelector('#close')
    btnAgendar.addEventListener('click', function(event){
        event.preventDefault()
    
        const hora = document.querySelector("#hora")
        const data = document.querySelector("#data")
        const logradouro = document.querySelector("#logradouro")
    })


     var fm = document.forms.length
     document.write(fm)



// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
// function urlDecode(string, overwrite){
// 	if(!string || !string.length){
// 		return {};
// 	}
// 	var obj = {};
// 	var pairs = string.split('&');
// 	var pair, name, value;
// 	var lsRegExp = /\+/g;
// 	for(var i = 0, len = pairs.length; i < len; i++){
// 		pair = pairs[i].split('=');
// 		name = unescape(pair[0]);
// 		value = unescape(pair[1]).replace(lsRegExp, " ");
// 		if(overwrite !== true){
// 			if(typeof obj[name] == "undefined"){
// 				obj[name] = value;
// 			}else if(typeof obj[name] == "string"){
// 				obj[name] = [obj[name]];
// 				obj[name].push(value);
// 			}else{
// 				obj[name].push(value);
// 			}
// 		}else{
// 			obj[name] = value;
// 		}
// 	}
// 	return obj;
// }

// var url = "www.testetestando.com?parametro1=oi&parametro2=x"; // Recebe a URL
// var params = urlDecode(url.substring(url.indexOf("?")+1)); // Decodifica e monta um array com todos parametros
// document.getElementById('teste').innerHTML = url+"<br/>"+params['parametro1']+"<br/>"+params['parametro2']