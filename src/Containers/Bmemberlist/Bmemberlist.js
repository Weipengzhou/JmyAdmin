import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { Form, Input, DatePicker, Select, Button,  Radio,} from 'antd';
import moment from 'moment';
import './Bmemberlist.css'

  const FormItem = Form.Item;
  const { Option } = Select;
  const { TextArea } = Input;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
         
        }
    }

    componentDidMount(){
      this.props.xiuGaicom(this.props.location.query.id)
    }
    handleSubmit=(e)=>{
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          ...fieldsValue,
          'addtime': fieldsValue['addtime'].format('X'),
         
        };
  
        this.props.cunGaicom(values)
      });
    
    }
    render(){
   
      const { getFieldDecorator} = this.props.form;
      const config = {initialValue:moment(this.props.c_content.addtime, 'X')}
  
        return(
            <div className='Bmemberlist'>
              <FormItem
                         {...formItemLayout}
                         label="id"
                       >
                        
                        {getFieldDecorator('id', {
                            initialValue:this.props.c_content.id,

                })(
                  <Input style={{width:'200px'}}  disabled/>
                        
                )}
                         
                 </FormItem>
            <FormItem
              {...formItemLayout}
              label="账号"
            >

              {getFieldDecorator('username', {
                initialValue: this.props.c_content.username,

              })(
                <Input style={{ width: '200px' }} />

                )}

            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
            >

              {getFieldDecorator('password', {
                initialValue: this.props.c_content.password,

              })(
                <Input style={{ width: '200px' }} />

                )}

            </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="公司名称"
                       >
                         {getFieldDecorator('cname', {
                initialValue: this.props.c_content.cname + '',

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                          
                 </FormItem>
            
                 <FormItem
                        {...formItemLayout}
                        label="地区"
                      
                      > 
                      {getFieldDecorator('s_city', {
                initialValue: this.props.c_content.s_city + '',

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                     
                 </FormItem> 
                 <FormItem
                         {...formItemLayout}
                         label="联系人"
                       >
                         {getFieldDecorator('lianxiren', {
                initialValue: this.props.c_content.lianxiren + '',

                })(
                  <Input style={{width:'200px'}}/>
                        
                )}
                         
                         
                 </FormItem>    
                 <FormItem
                         {...formItemLayout}
                         label="固定电话"
                       >
                          {getFieldDecorator('tel', {
                initialValue: this.props.c_content.tel + '',

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                      
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="手机"
                       >
                          {getFieldDecorator('mobile', {
                initialValue: this.props.c_content.mobile + '',

                })(
                  <Input style={{width:'200px'}} />
                        
                )}
                         
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="详细地址"
                       >
                          {getFieldDecorator('dizhi', {
                initialValue: this.props.c_content.dizhi + '',

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                          
                         
                 </FormItem>
                 <FormItem
                        {...formItemLayout}
                        label="承接价位"
                      
                      > 
                       {getFieldDecorator('jiawei', {
                initialValue: this.props.c_content.jiawei + '',

                })(
                 
                  <Select
          
                   placeholder=""
                   style={{
                     margin: '8px 0',width:'200px'
                   }}
                   
                 >
                  <Option value="5w以下">5w以下</Option>
                  <Option value="5w-10w">5w-10w</Option>
                  <Option value="10w-20w">10w-20w</Option>
                  <Option value="20w以上">20w以上</Option>
                 </Select>
                        
                )}
                    </FormItem>   
                    
                    <FormItem
                            {...formItemLayout}
                            label="备注"
                        >
                             {getFieldDecorator('beizhu', {
                initialValue: this.props.c_content.beizhu + '',

                })(
                  <TextArea style={{ minHeight: 32,width:'400px' }} placeholder="" rows={4} />
                         
                        
                )}
                            
                    </FormItem>      
                 <FormItem
                        {...formItemLayout}
                        label="会员状态"
                      
                      >  {getFieldDecorator('userstatus', {
                        initialValue:this.props.c_content.userstatus+'',

            })(
              <Radio.Group  >
              <Radio value='0'>普通</Radio>
              <Radio value='1'>vip</Radio>
                            
                            </Radio.Group>
                    
            )}
                           
                
                  </FormItem>
                  <FormItem
                        {...formItemLayout}
                        label="审核状态"
                      
                      > 
                       {getFieldDecorator('isshow', {
                            initialValue:this.props.c_content.isshow+'',

                })(
                  <Radio.Group  >
                  <Radio value="0">拒绝</Radio>
                  <Radio value="1">通过</Radio>
                  <Radio value="2">待审核</Radio>                                        
                            </Radio.Group>
                        
                )}
                           
                  </FormItem>
                  <FormItem
                         {...formItemLayout}
                         label="添加日期"
                       >
                        {getFieldDecorator('addtime',config)(
                  <DatePicker  />
                        
                )}
                       
                          
                         
                 </FormItem>     
             



                  

                 <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              
                  <Button style={{ marginLeft: 8 }} onClick={this.handleSubmit.bind(this)}>保存</Button>
                 </FormItem>
            </div>    
        )
    }
}

function mapStateToProps(state) {
  return { c_content: state.reducers.c_content}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
  const Bmemberlist =Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(Bmemberlist);