import * as  types  from './types';
import { type } from 'os';
let initState={
    notice:'',
    first_city:'郑州',
    company_list:[{
        key: '1',
        s_city: '郑州市',
        new_city:'河南省郑州市二七区',
        lianxiren:'家家',
        tel:'0371-668668',
        mobile:'1314013732',
        cname:'春天里装修公司',
        dizhi:'郑州市什么地方',
        jiawei:'15-20w以上',
        num:'108672',
        userstatus:'vip',
        beizhu:'这是备注',
        isshow:'通过',
        addtime:'2021-12-12',
        id:'1'
      }],
      c_content:{
        key: '1',
        s_city: '郑州市',
        new_city:'河南省郑州市二七区',
        lianxiren:'家家',
        tel:'0371-668668',
        mobile:'1314013732',
        cname:'春天里装修公司',
        dizhi:'郑州市什么地方',
        jiawei:'0',
        num:'108672',
        userstatus:'0',
        beizhu:'这是备注',
        isshow:'0',
        addtime:'2021-12-12',
        id:'1',
    
      },
      content: {
        id: null,
        s_city: null,
        comm: null,
        rebacktime: null,
        beizhu: null,
        source: null,
        shstatus: null,
        ip: null,
        addtime: null,
        shtime: null,
        area: null,
        leixing: null,
        bstatus: null,
        operator: null,
        username: null,
        mobile: null,
        price: null,
        zxyaoqiu: null,
        lftime: null,
        havekey:null,
        zxtime: null,
        zxleixing: null,
        sex: null
      },
      fileList: [{
        uid: -1,
        url: '',
      }],
        model_statu: {
          msg: ' ',
          message: ''
        },
        designList:[],
        gongdiMessage: [{ id: '1', gid: '1866', gname: '金地梅陇', overstatus: '5', address: '深圳市宝安区', leixing: '0', s_city: '深圳市', area: '120', price: '12万' }],
  CompanyZixunAbout: { id: 1, title: '', content: ' ', addtime:'1520574846 ',pid:'1'}
    
}

const reducer = (state=initState,action)=>  {
    switch(action.type){
        case types.LOGIN_STATU:
        
        return Object.assign({}, state, {
          'city':action.text,
          'first_city':action.text[0],
        });
        case types.LOGIN_STATU_FAIL:
        console.log('a' )
        return Object.assign({}, state, {
          notice:'账号密码错误！'
        });
        case types.GET_ZHAOBIAO:
       
        return Object.assign({}, state, {
          biao_list:action.text.biao
        });

        case types.GET_GAI_ID:
  
        return Object.assign({}, state, {
          'content':action.text.message
        });
        
        case types.GET_MEMBER:
        return Object.assign({}, state, {
          'company_list':action.text.biao
        });
        case types.GET_GAI_COM:
  
        return Object.assign({}, state, {
          'c_content':action.text.message
        });
        case types.FIRST_CITY:
        
        return Object.assign({}, state, {
          'first_city':action.text
        });
       
      case types.TI_SHI:
      return Object.assign({},state,{
        'model_statu':action.text
      })
      case types.SET_ZIZHI:
        return Object.assign({}, state, {
          'fileList': action.text.message
        })
      case types.REDUX_GET_DESIGN:
      return Object.assign({},state,{
        'designList': action.text.designList
      })  
      case types.REDUX_GONGDI_LIST:
        return Object.assign({}, state, {
          gongdiList: action.text.gongdiList
        })
      case types.REDUX_GONGDI_MESSAGE:
      return Object.assign({},state,{
        gongdiMessage: action.text.gongdiMessage
      })
      case types.REDUX_JINDU_IMG:
        return Object.assign({}, state, {
          jinDuImg: action.text
        })
      case types.REDUX_COMPANY_ZIXUN_LIST:
        return Object.assign({}, state, {
          CompanyZixunList: action.text
        })  
      case types.REDUX_COMPANY_ZIXUN_ABOUT:
      return Object.assign({},state,{
        CompanyZixunAbout:action.text
      })  

        default:
        return state 
    }

}

export default reducer;