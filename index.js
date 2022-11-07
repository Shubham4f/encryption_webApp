const e_btn = document.querySelector('#e_btn');
const d_btn = document.querySelector('#d_btn');
const key_gen = document.querySelector('#key_gen');
values = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

key_gen.addEventListener('click', ()=>{
    eg_key = Math.floor((Math.random() * 9999) + 123);
    dg_key = dKeyGen(eg_key);
    const eg_message = document.querySelector("#eg_message");
    const eg_box = document.querySelector('#eg_message_box');
    eg_message.innerText = eg_key + "   (share.)";
    eg_box.classList.add('vo');
    const dg_message = document.querySelector("#dg_message");
    const dg_box = document.querySelector('#dg_message_box');
    dg_message.innerText = dg_key + "   (do not share.)";
    dg_box.classList.add('vo');
});

e_btn.addEventListener('click', () => {
    const p_text = document.querySelector("#p_text").value;
    var key = Number(document.querySelector("#e_key").value);
    if(p_text=="" || key == ""){
        alert("Encryption text or key feild is empty!!!");
        return;
    }
    const e_message = document.querySelector("#e_message");
    const e_box = document.querySelector('#e_message_box');
    e_message.innerText = encryptFun(p_text, key);
    e_box.classList.add('vo');
});

d_btn.addEventListener('click', () => {
    const d_text = document.querySelector("#d_text").value;
    var key = Number(document.querySelector("#d_key").value);
    if(d_text==""){
        alert("Dcryption text/Key feild is empty!!!");
        return;
    }
    key = dKeyD(key);
    const d_message = document.querySelector("#d_message");
    const d_box = document.querySelector('#d_message_box');
    d_message.innerText = dcryptFun(d_text, key);
    d_box.classList.add('vo');
});

function encryptFun(p_text, key) {
    key = (key+key%13)*3
    key = key%(values.length-5) + 1;
    var dict = {};
    for(i = 0; i<values.length; i++)
        dict[values[i]] = values[valueGen(i+key)];
    msg = "";
    for(i=0; i<p_text.length; i++)
        msg = msg + dict[p_text[i]];
    return msg;
}

function dcryptFun(d_text, key) {
    key = (key+key%13)*3
    key = key%(values.length-5) + 1;
    var dict = {};
    for(i = 0; i<values.length; i++)
        dict[values[i]] = values[valueGen(i-key)];
    msg = "";
    for(i=0; i<d_text.length; i++)
        msg = msg + dict[d_text[i]];
    return msg;
}

function valueGen(i) {
    if(i<0)
        return i+values.length;
    if(i>values.length-1)
        return i-values.length;
    return i;
}

function dKeyGen(e_key) {
    d_key = e_key*2+101;
    d_key = d_key + "";
	d_key = d_key.split("").reverse().join("");
    return d_key;
}

function dKeyD(d_key) {
    d_key = d_key + "";
	d_key = d_key.split("").reverse().join("");
    key = Number(d_key);
    key = (key-101)/2;
    return key;
}
