import path from '../url';
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
            throw new Error('error');
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
      throw new Error('error');
    });
}

export function logIn(text) {
    return post(path+'/LOG_IN','username='+text.username+'&password='+text.password)
}

export function userLogin(text) {
    return post(path+'/userLogin', 'username=' + text.username + '&password=' + text.password)
}
export function postZhaobiao(text) {
   
    return post(path+'/POST_Zhaobiao','s_city='+text)
}
export function xiuGaiid(text) {
 
    return post(path+'/xiuGaiid','id='+text)
}
export function cunGaiid(text) {

    return post(path+'/cunGaiid', 'area=' + text.area + '&beizhu=' + text.beizhu + '&bstatus=' + text.bstatus + '&comm=' + text.comm + '&havekey=' + text.havekey + '&ip=' + text.ip + '&leixing=' + text.leixing + '&lftime=' + text.lftime + '&mobile=' + text.mobile + '&price=' + text.price + '&rebacktime=' + text.rebacktime + '&s_city=' + text.s_city + '&sex=' + text.sex + '&shstatus=' + text.shstatus + '&username=' + text.username + '&zxleixing=' + text.zxleixing + '&zxtime=' + text.zxtime + '&zxyaoqiu=' + text.zxyaoqiu + '&id=' + text.id)
}
export function addGaild(text) {
    return post(path+'/Create_New','area='+text.area+'&beizhu='+text.beizhu+'&bstatus='+text.bstatus+'&comm='+text.comm+'&havekey='+text.havekey+'&ip='+text.ip+'&leixing='+text.leixing+'&lftime='+text.lftime+'&mobile='+text.mobile+'&price='+text.price+'&rebacktime='+text.rebacktime+'&s_city='+text.s_city+'&sex='+text.sex+'&shstatus='+text.shstatus+'&username='+text.username+'&zxleixing='+text.zxleixing+'&zxtime='+text.zxtime+'&zxyaoqiu='+text.zxyaoqiu)
}

export function postMember(text) {
    return post(path+'/POST_Member','s_city='+text)
}
export function xiuGaicom(text) {
   
    return post(path+'/xiuGaicom','id='+text)
}
export function cunGaicom(text) {
   
    return post(path+'/cunGaicom', 's_city=' + text.s_city + '&new_city=' + text.new_city + '&lianxiren=' + text.lianxiren + '&tel=' + text.tel + '&mobile=' + text.mobile + '&cname=' + text.cname + '&dizhi=' + text.dizhi + '&jiawei=' + text.jiawei + '&userstatus=' + text.userstatus + '&beizhu=' + text.beizhu + '&isshow=' + text.isshow + '&addtime=' + text.addtime + '&id=' + text.id + '&username=' + text.username + '&password=' + text.password)
}
export function addGaicom(text) {

    return post(path+'/CREATE_NEW_COM', 's_city=' + text.s_city + '&new_city=' + text.new_city + '&lianxiren=' + text.lianxiren + '&tel=' + text.tel + '&mobile=' + text.mobile + '&cname=' + text.cname + '&dizhi=' + text.dizhi + '&jiawei=' + text.jiawei + '&userstatus=' + text.userstatus + '&beizhu=' + text.beizhu + '&isshow=' + text.isshow + '&addtime=' + text.addtime + '&username=' + text.username + '&password=' + text.password)
}
export function adminGaicom(text){

    return post(path+'/adminGaicom', 's_city=' + text.values.s_city + '&lianxiren=' + text.values.lianxiren + '&tel=' + text.values.tel + '&mobile=' + text.values.mobile + '&cname=' + text.values.cname + '&dizhi=' + text.values.dizhi + '&jiawei=' + text.values.jiawei + '&id=' + text.values.id + '&imagename=' + text.imagename)
}
export function xiuGaipassword(text){
    return post(path+'/xiuGaipassword','id='+text.id+'&password='+text.password)
}
export function getZizhi(text){
    console.log(text)
    return post(path+'/getZizhi', 'lei=' + text )
}
export function addZizhi(text) {
    return post(path+'/addZizhi', 'lei=' + text.lei+'&url='+text.url)
}
export function delZizhi(text) {
    return post(path+'/delZizhi', 'uid=' + text)
}
export function getDesign(text){
    return post(path+'/getDesign', 'sid=' + text)
}
export function delDesign(text) {
    return post(path+'/delDesign', 'id=' + text)
}
export function cunDesign(text) {
    return post(path+'/cunDesign', 'sid=' + text.sid + '&imagename=' + text.img.file.response.data.url+'&name='+text.name+'&zhiwei='+text.zhiwei)
}
export function getGongdiList(text){
    return post(path+'/getGongdiList','id='+text )
}
export function getGongdiMessage(text){
    return post(path+'/getGongdiMessage','id='+text)
}
export function gaiGongdiMessage(text){
    return post(path+'/gaiGongdiMessage', 'id=' + text.values.id + '&address=' + text.values.address + '&area=' + text.values.area + '&gname=' + text.values.gname + '&leixing=' + text.values.leixing + '&price=' + text.values.price + '&s_city=' + text.values.s_city + '&imagename=' + text.imagename + '&overstatus=' + text.values.overstatus)
}
export function getJinDuImg(text){
    return post(path+'/getJinDuImg', 'pid=' + text)
}
export function cunJinDuImg(text){
    return post(path+'/cunJinDuImg', 'pid=' + text.lei + '&url=' + text.url + '&jd=' + text.jd + '&overstatus=' + text.overstatus)
}
export function delJinDuImg(text) {
    return post(path+'/delJinDuImg', 'uid='+text)
}
export function newJinDuImg(text){
    return post(path+'/newJinDuImg', '&address=' + text.values.address + '&area=' + text.values.area + '&gname=' + text.values.gname + '&leixing=' + text.values.leixing + '&price=' + text.values.price + '&s_city=' + text.values.s_city + '&imagename=' + text.imagename + '&overstatus=' + text.values.overstatus+'&gid='+text.gid)
}
export function delJinDu(text){
    return post(path+'/delJinDu', 'id=' + text)
}
export function getCompanyZixunList(text){
    return post(path+'/getCompanyZixunList', 'id=' + text)
}
export function getCompanyZixunAbout(text){
    return post(path+'/getCompanyZixunAbout', 'id=' + text)
}
export function gaiCompanyZixunAbout(text) {
    return post(path+'/gaiCompanyZixunAbout', 'id=' + text.values.id+'&title='+text.values.title+'&content='+text.content+'&addtime='+text.values.addtime)
}
export function delCompanyZixunList(text){
    return post(path+'/delCompanyZixunList', 'id=' + text)
}
export function addCompanyZixun(text){
    return post(path+'/addCompanyZixun', 'pid=' + text.pid + '&title=' + text.values.title + '&content=' + text.content + '&addtime=' + text.values.addtime)
}
export function getNewsList(text){
    return post(path+'/getNewsList')
}