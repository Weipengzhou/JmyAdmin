export  const types ={
 GET_CITY : 'GET_CITY',           //城市   
 LOG_IN : 'LOG_IN',                     //登陆
 LOGIN_STATU : 'LOGIN_STATU',            //登录验证状态成功
 LOGIN_STATU_FAIL : 'LOGIN_STATU_FAIL',  //登录验证状态失败
 POST_ZHAOBIAO : 'POST_ZHAOBIAO',        //发起获取招标
 GET_ZHAOBIAO : 'GET_ZHAOBIAO',          //获取招标列表
 XIU_GAI_ID : 'XIU_GAI_ID',             //发出修改标内容id
 GET_GAI_ID : 'GET_GAI_ID',             //saga拿到标内容id
 CUN_GAI_ID : 'CUN_GAI_ID',             //saga拿到标内容id
 ADD_GAILD : 'ADD_GAILD',               //存新建
 POST_MEMBER : 'POST_MEMBER',           //发出获取公司列表
 GET_MEMBER : 'GET_MEMBER',             //获取公司列表
 XIU_GAI_COM : 'XIU_GAI_COM',           //发出修改标内容id
 GET_GAI_COM : 'GET_GAI_COM',           //saga拿到标内容id
 CUN_GAI_COM : 'CUN_GAI_COM',           //saga拿到标内容id
 ADD_COM : 'ADD_COM',                   //存新建
 FIRST_CITY : 'FIRST_CITY',             //设置默认城市
 ADMIN_GAI_COM : "ADMIN_GAI_COM",        //商家自定义管理信息发起保存
 TI_SHI : 'TI_SHI',                     //操作提示
 XIU_GAI_PASSWORD : 'XIU_GAI_PASSWORD',  //修改装修公司登录密码
 GET_ZIZHI : 'GET_ZIZHI',               //获取资质
 SET_ZIZHI : 'SET_ZIZHI',               //设置redux资质图片列表
 ADD_ZIZHI : 'ADD_ZIZHI',                //发出上传请求
 DEL_ZIZHI : 'DEL_ZIZHI',               //发出删除请求
 GET_DESIGN : 'GET_DESIGN',             //发出获取设计师列表请求
 REDUX_GET_DESIGN : 'REDUX_GET_DESIGN',  //将获取到的设计师存入redux
 DEL_DESIGN : 'DEL_DESIGN',             //发出删除设计师请求
 CUN_DESIGN : 'CUN_DESIGN',             //发出添加上传图片请求
 GET_GONGDI_LIST : 'GET_GONGDI_LIST',     //发出获取工地列表请求
 REDUX_GONGDI_LIST : 'REDUX_GONGDI_LIST',//将工地列表存入redux
 GET_GONGDI_MESSAGE : 'GET_GONGDI_MESSAGE', //发出获取工地信息请求
 REDUX_GONGDI_MESSAGE : 'REDUX_GONGDI_MESSAGE', //将获取到的信息存入redux
 GAI_GONGDI_MESSAGE : 'GAI_GONGDI_MESSAGE',//发出修改保存工地信息请求
 GET_JINDU_IMG : 'GET_JINDU_IMG',         //发出获取施工阶段图片请求
 REDUX_JINDU_IMG : 'REDUX_JINDU_IMG' ,    //将施工阶段图片存入redux
 CUN_JINDU_IMG : 'CUN_JINDU_IMG' ,       //发出存储施工阶段图片请求
 DEL_JINDU_IMG : 'DEL_JINDU_IMG',        //发出删除施工阶段图片请求
 NEW_JINDU_IMG : 'NEW_JINDU_IMG' ,        //发出存储新建施工阶段请求
 DEL_JINDU : 'DEL_JINDU' ,               //发出删除施工请求
 GET_COMPANY_ZIXUN_LIST : 'GET_COMPANY_ZIXUN_LIST', //发出获取公司信息请求
 REDUX_COMPANY_ZIXUN_LIST : 'REDUX_COMPANY_ZIXUN_LIST', //将公司资讯存入redux
 DEL_COMPANY_ZIXUN_LIST : 'DEL_COMPANY_ZIXUN_LIST', // 发出删除咨询请求
 GET_COMPANY_ZIXUN_ABOUT : 'GET_COMPANY_ZIXUN_ABOUT', //发出获取公司资讯详细信息请求
 REDUX_COMPANY_ZIXUN_ABOUT : 'REDUX_COMPANY_ZIXUN_ABOUT', //将公司资讯详细信息存入redux
 GAI_COMPANY_ZIXUN_ABOUT : 'GAI_COMPANY_ZIXUN_ABOUT', //发出存储修改资讯信息请求
 ADD_COMPANY_ZIXUN : 'ADD_COMPANY_ZIXUN', //发出新建咨询请求
 USER_LOGIN : 'USER_LOGIN', //发出用户登陆请求
 GET_NEWS_LIST:'GET_NEWS_LIST',//发出获取新闻列表请求
 REDUX_NEWS_LIST:'REDUX_NEWS_LIST',//将新闻存到redux
    REDUX_PAGE:'REDUX_PAGE'  , //页面页码
}



 