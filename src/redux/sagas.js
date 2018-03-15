import { call, put, takeLatest} from 'redux-saga/effects';
import * as apis from '../api/api';
import * as types from './types';
import * as actions from './actions';
import {push} from 'react-router-redux';
import {notification} from 'antd'


function* logIn(e) {
    try {
       
        const result = yield call(apis.logIn,e.text);
      
        if(result.login_res.code == 1){
            var city =  result.login_res.city.split(",");
            yield put(actions.loginStatu(city))
      
            yield put(push('/index/List'));

        }else if(result.login_res.code == 0){
          
            yield put(actions.loginStatuFail())
        }else{
            alert('登陆失败，请与管理员联系')
        }

        
       
    } catch (err) {
        
     }
}

function* UserLogin(e){
        try{
            const result = yield call(apis.userLogin, e.text);
            if (result.login_res.code == 1) {
                yield put(push('Index/CompanyAdmin/' + result.login_res.id+'/BasicInformation'));

            } else if (result.login_res.code == 0) {

                yield put(actions.loginStatuFail())
            } else {
                alert('登陆失败，请与管理员联系')
            }
        }catch(err){

        }
    }

function* postZhaobiao(e) {
    try {
     
        const result = yield call(apis.postZhaobiao,e.text);
        yield put(actions.getZhaobiao(result))
    } catch (err) {
        
     }
}

function* xiuGaiid(e) {
    try {
      
        const result = yield call(apis.xiuGaiid,e.text);
        yield put(actions.getGaiid(result))
    } catch (err) {
        
     }
}
function* cunGaiid(e) {
    try {
      
        const result = yield call(apis.cunGaiid,e.text);

        if(result.code == 1 ){
            
            yield put(push("/Index/List"))
           
        }else{
            alert('修改失败！')
        }
    } catch (err) {
        
     }
}

function* addGaild(e) {
    try {
      
        const result = yield call(apis.addGaild,e.text);
      
        if(result.code == 1 ){
            yield put(push("/Index/List"))
        }else{
            alert('添加失败！')
        }
    } catch (err) {
        
     }
}



function* postMember(e) {
    try {
       
        const result = yield call(apis.postMember,e.text);
        yield put(actions.getMember(result))
    } catch (err) {
        
     }
}

function* xiuGaicom(e) {
    try {
      
        const result = yield call(apis.xiuGaicom,e.text);
        yield put(actions.getGaicom(result))
    } catch (err) {
        
     }
}
function* cunGaicom(e) {
    try {
      
        const result = yield call(apis.cunGaicom,e.text);
        
        if (result.code == 1) {
            yield put(push("/Index/Memberlist"))
        } else {
            alert('修改失败！')
        }
    } catch (err) {
        
     }
}

function* addGaicom(e) {
    try {
      
        const result = yield call(apis.addGaicom,e.text);
      
        if (result.code == 1) {
            yield put(push("/Index/Memberlist"))
        } else {
            alert('添加失败')
        }
    } catch (err) {
        
     }
}

function* adminGaicom(e) {

    try {

        const result = yield call(apis.adminGaicom, e.text);
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '保存成功',
            }); 
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))
            
        } else {
            notification['success']({
                error: '提示',
                description: '保存失败',
            }); 
        }
    } catch (err) {

    }
}



function* xiuGaipassword(e) {
    try {

        const result = yield call(apis.xiuGaipassword, e.text);
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '密码修改成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '密码修改失败',
            });
        }
    } catch (err) {

    }
}

function* getZizhi(e){
 
    try{
  
        const result = yield call(apis.getZizhi,e.text);
        yield put(actions.setZizhi(result))
    }catch(err){

    }
}
function* addZizhi(e) {
    try {
        const result = yield call(apis.addZizhi, e.text);
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '添加成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '添加失败',
            });
        }
    } catch (err) {

    }
}

function* delZizhi(e) {
    try {

        const result = yield call(apis.delZizhi, e.text);
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '删除成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '删除失败',
            });
        }
    } catch (err) {

    }
}
function* getDesign(e){
    try{
        const result = yield call(apis.getDesign, e.text);
        yield put(actions.reduxGetdesign(result))
    }catch(err){

    }
}

function* delDesign(e){
    try{
        const result = yield call(apis.delDesign, e.text.id);
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '删除成功',
            });
            yield put(actions.getDesign(e.text.sid))

        } else {
            notification['success']({
                error: '提示',
                description: '删除失败',
            });
        }
    }catch(err){

    }
}

function* cunDesign(e){
    
    try{
        const result = yield call(apis.cunDesign,e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '添加成功',
            });
            yield put(push({ pathname: '/Index/CompanyAdmin/' + e.text.sid + '/DesignTeam', query: { id: e.text.sid } }))

        } else {
            notification['success']({
                error: '提示',
                description: '添加失败',
            });
        }
    }catch(err){

    }
}

function* getGongdiMessage(e){
    try{
        const result = yield call(apis.getGongdiMessage,e.text)
        yield put(actions.reduxGongdiMessage(result))
    }catch(err){

    }
}
function* getGongdiList(e){
    try{
        const result = yield call(apis.getGongdiList, e.text)
        yield put(actions.reduxGongdiList(result))
    }catch(err){

    }
}
function* gaiGongdiMessage(e){
    try{
        const result = yield call(apis.gaiGongdiMessage,e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '修改成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '修改失败',
            });
        }
    }catch(err){

    }
}
function* getJinDuImg(e){
    try{
        const result = yield call(apis.getJinDuImg,e.text)
        yield put(actions.reduxJinDuImg(result))
    }catch(err){

    }
}
function* cunJinDuImg(e){
    try{
        const result = yield call(apis.cunJinDuImg,e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '添加成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '添加失败',
            });
        }
    }catch(err){

    }
}
function* delJinDuImg(e){
    try{
        const result = yield call(apis.delJinDuImg,e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '删除成功',
            });
            // yield put(actions.tiShi({ msg: 'success', message:'保存成功'}))

        } else {
            notification['success']({
                error: '提示',
                description: '删除失败',
            });
        }
    }catch(err){
      
    }
}
function* newJinDuImg(e){
    try{
        const result = yield call(apis.newJinDuImg, e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '添加成功',
            });
            yield put(push({ pathname: '/Index/CompanyAdmin/' + e.text.gid + '/ConstructionSite', query: { id: e.text.gid } }))
        } else {
            notification['success']({
                error: '提示',
                description: '添加失败',
            });
        }
        
    }catch(err){

    }
}
function* delJinDu(e){
    try{
        const result = yield call(apis.delJinDu, e.text.id)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '删除成功',
            });

            yield put(actions.getGongdiList(e.text.gid))
        } else {
            notification['success']({
                error: '提示',
                description: '删除失败',
            });
        }
    }catch(err){

    }
}
function* getCompanyZixunList(e){
    try{
        const result = yield call(apis.getCompanyZixunList,e.text)
        yield put(actions.reduxCompanyZixunList(result))
    }catch(err){

    }
}
function* getCompanyZixunAbout(e){
    try{
        const result = yield call(apis.getCompanyZixunAbout, e.text)
        yield put(actions.reduxCompanyZixunAbout(result))
    }catch(err){

    }
}
function* gaiCompanyZixunAbout(e){
    console.log(e)
    try{
        const result = yield call(apis.gaiCompanyZixunAbout, e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '修改成功',
            });
            // yield put(push({ pathname: '/Index/CompanyAdmin/' + e.text.pid + '/CompanyInformation', query: { id: e.text.pid } }))

        } else {
            notification['success']({
                error: '提示',
                description: '修改失败',
            });
        }
    }catch(err){

    }
}

function* delCompanyZixunList(e){
    console.log(e)
    try{
        const result=yield call(apis.delCompanyZixunList, e.text.id)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '删除成功',
            });

            yield put(actions.getCompanyZixunList(e.text.pid))
        } else {
            notification['success']({
                error: '提示',
                description: '删除失败',
            });
        }
    }catch(err){

    }
}
function* addCompanyZixun(e){
    try{
        const result = yield call(apis.addCompanyZixun, e.text)
        if (result.code == 1) {
            notification['success']({
                message: '提示',
                description: '添加成功',
            });
            yield put(push({ pathname: '/Index/CompanyAdmin/' + e.text.pid + '/CompanyInformation', query: { id: e.text.pid } }))

        } else {
            notification['success']({
                error: '提示',
                description: '添加失败',
            });
        }
    }catch(err){

    }
}
export default function* defaultSaga() {
    yield [
        takeLatest(types.LOG_IN, logIn),
        takeLatest(types.POST_ZHAOBIAO, postZhaobiao),
        takeLatest(types.XIU_GAI_ID, xiuGaiid),
        takeLatest(types.CUN_GAI_ID, cunGaiid),
        takeLatest(types.ADD_GAILD, addGaild),
        takeLatest(types.POST_MEMBER, postMember),
        takeLatest(types.XIU_GAI_COM, xiuGaicom),
        takeLatest(types.CUN_GAI_COM, cunGaicom),
        takeLatest(types.ADD_COM, addGaicom),
        takeLatest(types.ADMIN_GAI_COM, adminGaicom),
        takeLatest(types.XIU_GAI_PASSWORD, xiuGaipassword),
        takeLatest(types.GET_ZIZHI,getZizhi),
        takeLatest(types.ADD_ZIZHI, addZizhi),
        takeLatest(types.DEL_ZIZHI,delZizhi),
        takeLatest(types.GET_DESIGN,getDesign),
        takeLatest(types.DEL_DESIGN, delDesign),
        takeLatest(types.CUN_DESIGN, cunDesign),
        takeLatest(types.GET_GONGDI_LIST, getGongdiList),
        takeLatest(types.GET_GONGDI_MESSAGE, getGongdiMessage),
        takeLatest(types.GAI_GONGDI_MESSAGE, gaiGongdiMessage),
        takeLatest(types.GET_JINDU_IMG, getJinDuImg),
        takeLatest(types.CUN_JINDU_IMG, cunJinDuImg),
        takeLatest(types.DEL_JINDU_IMG, delJinDuImg),
        takeLatest(types.NEW_JINDU_IMG, newJinDuImg),
        takeLatest(types.DEL_JINDU, delJinDu),
        takeLatest(types.GET_COMPANY_ZIXUN_LIST, getCompanyZixunList),
        takeLatest(types.GET_COMPANY_ZIXUN_ABOUT, getCompanyZixunAbout),
        takeLatest(types.GAI_COMPANY_ZIXUN_ABOUT, gaiCompanyZixunAbout),
        takeLatest(types.DEL_COMPANY_ZIXUN_LIST, delCompanyZixunList),
        takeLatest(types.ADD_COMPANY_ZIXUN, addCompanyZixun),
        takeLatest(types.USER_LOGIN, UserLogin),
    ];
}