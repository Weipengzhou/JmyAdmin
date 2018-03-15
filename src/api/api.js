function parseJSON(response) {
    return response.json();
}

function get(url) {
    const defaultOptions = {
        method: 'GET',
    };
    return fetch(url, defaultOptions)
        .then(parseJSON)
        .catch(() => {
            throw new Error('嘿嘿');
        });
}
function post(url,data) {
    const defaultOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body:data,
    };

    return fetch(url, defaultOptions)
    .then((res)=>{return res.json()})
    .catch(() => {
      throw new Error('嘿嘿');
    });
}

export function logIn(text) {
    return post('http://127.0.0.1:8000/LOG_IN','username='+text.username+'&password='+text.password)
}
export function userLogin(text) {
    return post('http://127.0.0.1:8000/userLogin', 'username=' + text.username + '&password=' + text.password)
}
export function postZhaobiao(text) {
   
    return post('http://127.0.0.1:8000/POST_Zhaobiao','s_city='+text)
}
export function xiuGaiid(text) {
 
    return post('http://127.0.0.1:8000/xiuGaiid','id='+text)
}
export function cunGaiid(text) {

    return post('http://127.0.0.1:8000/cunGaiid', 'area=' + text.area + '&beizhu=' + text.beizhu + '&bstatus=' + text.bstatus + '&comm=' + text.comm + '&havekey=' + text.havekey + '&ip=' + text.ip + '&leixing=' + text.leixing + '&lftime=' + text.lftime + '&mobile=' + text.mobile + '&price=' + text.price + '&rebacktime=' + text.rebacktime + '&s_city=' + text.s_city + '&sex=' + text.sex + '&shstatus=' + text.shstatus + '&username=' + text.username + '&zxleixing=' + text.zxleixing + '&zxtime=' + text.zxtime + '&zxyaoqiu=' + text.zxyaoqiu + '&id=' + text.id)
}
export function addGaild(text) {
    return post('http://127.0.0.1:8000/Create_New','area='+text.area+'&beizhu='+text.beizhu+'&bstatus='+text.bstatus+'&comm='+text.comm+'&havekey='+text.havekey+'&ip='+text.ip+'&leixing='+text.leixing+'&lftime='+text.lftime+'&mobile='+text.mobile+'&price='+text.price+'&rebacktime='+text.rebacktime+'&s_city='+text.s_city+'&sex='+text.sex+'&shstatus='+text.shstatus+'&username='+text.username+'&zxleixing='+text.zxleixing+'&zxtime='+text.zxtime+'&zxyaoqiu='+text.zxyaoqiu)
}

export function postMember(text) {
    return post('http://127.0.0.1:8000/POST_Member','s_city='+text)
}
export function xiuGaicom(text) {
   
    return post('http://127.0.0.1:8000/xiuGaicom','id='+text)
}
export function cunGaicom(text) {
   
    return post('http://127.0.0.1:8000/cunGaicom', 's_city=' + text.s_city + '&new_city=' + text.new_city + '&lianxiren=' + text.lianxiren + '&tel=' + text.tel + '&mobile=' + text.mobile + '&cname=' + text.cname + '&dizhi=' + text.dizhi + '&jiawei=' + text.jiawei + '&userstatus=' + text.userstatus + '&beizhu=' + text.beizhu + '&isshow=' + text.isshow + '&addtime=' + text.addtime + '&id=' + text.id + '&username=' + text.username + '&password=' + text.password)
}
export function addGaicom(text) {

    return post('http://127.0.0.1:8000/CREATE_NEW_COM', 's_city=' + text.s_city + '&new_city=' + text.new_city + '&lianxiren=' + text.lianxiren + '&tel=' + text.tel + '&mobile=' + text.mobile + '&cname=' + text.cname + '&dizhi=' + text.dizhi + '&jiawei=' + text.jiawei + '&userstatus=' + text.userstatus + '&beizhu=' + text.beizhu + '&isshow=' + text.isshow + '&addtime=' + text.addtime + '&username=' + text.username + '&password=' + text.password)
}
export function adminGaicom(text){

    return post('http://127.0.0.1:8000/adminGaicom', 's_city=' + text.values.s_city + '&lianxiren=' + text.values.lianxiren + '&tel=' + text.values.tel + '&mobile=' + text.values.mobile + '&cname=' + text.values.cname + '&dizhi=' + text.values.dizhi + '&jiawei=' + text.values.jiawei + '&id=' + text.values.id + '&imagename=' + text.imagename)
}
export function xiuGaipassword(text){
    return post('http://127.0.0.1:8000/xiuGaipassword','id='+text.id+'&password='+text.password)
}
export function getZizhi(text){
    console.log(text)
    return post('http://127.0.0.1:8000/getZizhi', 'lei=' + text )
}
export function addZizhi(text) {
    return post('http://127.0.0.1:8000/addZizhi', 'lei=' + text.lei+'&url='+text.url)
}
export function delZizhi(text) {
    return post('http://127.0.0.1:8000/delZizhi', 'uid=' + text)
}
export function getDesign(text){
    return post('http://127.0.0.1:8000/getDesign', 'sid=' + text)
}
export function delDesign(text) {
    return post('http://127.0.0.1:8000/delDesign', 'id=' + text)
}
export function cunDesign(text) {
    return post('http://127.0.0.1:8000/cunDesign', 'sid=' + text.sid + '&imagename=' + text.img.file.response.data.url+'&name='+text.name+'&zhiwei='+text.zhiwei)
}
export function getGongdiList(text){
    return post('http://127.0.0.1:8000/getGongdiList','id='+text )
}
export function getGongdiMessage(text){
    return post('http://127.0.0.1:8000/getGongdiMessage','id='+text)
}
export function gaiGongdiMessage(text){
    return post('http://127.0.0.1:8000/gaiGongdiMessage', 'id=' + text.values.id + '&address=' + text.values.address + '&area=' + text.values.area + '&gname=' + text.values.gname + '&leixing=' + text.values.leixing + '&price=' + text.values.price + '&s_city=' + text.values.s_city + '&imagename=' + text.imagename + '&overstatus=' + text.values.overstatus)
}
export function getJinDuImg(text){
    return post('http://127.0.0.1:8000/getJinDuImg', 'pid=' + text)
}
export function cunJinDuImg(text){
    return post('http://127.0.0.1:8000/cunJinDuImg', 'pid=' + text.lei + '&url=' + text.url + '&jd=' + text.jd + '&overstatus=' + text.overstatus)
}
export function delJinDuImg(text) {
    return post('http://127.0.0.1:8000/delJinDuImg', 'uid='+text)
}
export function newJinDuImg(text){
    return post('http://127.0.0.1:8000/newJinDuImg', '&address=' + text.values.address + '&area=' + text.values.area + '&gname=' + text.values.gname + '&leixing=' + text.values.leixing + '&price=' + text.values.price + '&s_city=' + text.values.s_city + '&imagename=' + text.imagename + '&overstatus=' + text.values.overstatus+'&gid='+text.gid)
}
export function delJinDu(text){
    return post('http://127.0.0.1:8000/delJinDu', 'id=' + text)
}
export function getCompanyZixunList(text){
    return post('http://127.0.0.1:8000/getCompanyZixunList', 'id=' + text)
}
export function getCompanyZixunAbout(text){
    return post('http://127.0.0.1:8000/getCompanyZixunAbout', 'id=' + text)
}
export function gaiCompanyZixunAbout(text) {
    return post('http://127.0.0.1:8000/gaiCompanyZixunAbout', 'id=' + text.values.id+'&title='+text.values.title+'&content='+text.content+'&addtime='+text.values.addtime)
}
export function delCompanyZixunList(text){
    return post('http://127.0.0.1:8000/delCompanyZixunList', 'id=' + text)
}
export function addCompanyZixun(text){
    return post('http://127.0.0.1:8000/addCompanyZixun', 'pid=' + text.pid + '&title=' + text.values.title + '&content=' + text.content + '&addtime=' + text.values.addtime)
}
