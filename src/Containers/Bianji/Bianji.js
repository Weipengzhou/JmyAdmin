import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { Form, Input, DatePicker, Select, Button,Radio, } from 'antd';
import moment from 'moment';
import './Bianji.css'

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

      this.props.xiuGaiid(this.props.location.query.id)
      
  }
    handleSubmit=(e)=>{
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          ...fieldsValue,
          'rebacktime': fieldsValue['rebacktime'].format('X'),
        
        };
   
        this.props.cunGaiid(values)
      });
    
    }
    render(){
     
  
      const { getFieldDecorator} = this.props.form;
     
      const config = {initialValue:moment(this.props.content.rebacktime, 'X')}
        return(
          
            <div className='Bianji'>
                 <FormItem
                         {...formItemLayout}
                         label="姓名"
                       >
                        
                        {getFieldDecorator('username', {
                            initialValue:this.props.content.username,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="id"
                       >
                        
                        {getFieldDecorator('id', {
                            initialValue:this.props.content.id,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="小区名称"
                       >
                        
                        {getFieldDecorator('comm', {
                            initialValue:this.props.content.comm,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                        {...formItemLayout}
                        label="性别"
                      
                      > 
                      {getFieldDecorator('sex', {
                        initialValue:this.props.content.sex,

            })(
              <Radio.Group>
                              <Radio value="0">男</Radio>
                              <Radio value="1">女</Radio>
                            
                            </Radio.Group>
                    
            )}
                           
                
                  </FormItem>
                  <FormItem
                        {...formItemLayout}
                        label="招标类型"
                      
                      > 
                      {getFieldDecorator('leixing', {
                        initialValue:this.props.content.leixing+'',

            })(
              <Radio.Group>
                              <Radio value="0">家装</Radio>
                              <Radio value="1">公装</Radio>                        
                            </Radio.Group>
                    
            )}
                            
                  </FormItem>
                  <FormItem
                        {...formItemLayout}
                        label="装修类型"
                      
                      > 
                      {getFieldDecorator('zxleixing', {
                        initialValue:this.props.content.zxleixing,

            })(
              <Radio.Group>
                              <Radio value="0">全包</Radio>
                              <Radio value="1">半包</Radio>                        
                            </Radio.Group>
            )}
                          
                  </FormItem>
                  <FormItem
                        {...formItemLayout}
                        label="预算"
                      
                      > 
                      {getFieldDecorator('price', {
                            initialValue:this.props.content.price,

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
                        label="地区"
                      
                      > 
                      {getFieldDecorator('s_city', {
                            initialValue:this.props.content.s_city,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                    </FormItem>   
                    <FormItem
                         {...formItemLayout}
                         label="装修时间"
                       >
                        
                        {getFieldDecorator('zxtime', {
                            initialValue:this.props.content.zxtime,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>  
                 <FormItem
                         {...formItemLayout}
                         label="装修面积"
                       >
                        
                        {getFieldDecorator('area', {
                            initialValue:this.props.content.area,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="联系电话"
                       >
                        
                        {getFieldDecorator('mobile', {
                            initialValue:this.props.content.mobile,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="装修要求"
                       >
                        
                        {getFieldDecorator('zxyaoqiu', {
                            initialValue:this.props.content.zxyaoqiu,

                })(
                  <TextArea style={{ minHeight: 32,width:'400px' }} placeholder="" rows={4} />
                         
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="量房时间"
                       >
                        
                        {getFieldDecorator('lftime', {
                            initialValue:this.props.content.lftime,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="回访时间"
                       >
                     {getFieldDecorator('rebacktime',config)(
                      <DatePicker  />
                            
                    )} 
                         
                 </FormItem>
                 <FormItem
                        {...formItemLayout}
                        label="审核状态"
                      
                      > 
                        {getFieldDecorator('shstatus', {
                            initialValue:this.props.content.shstatus+'',

                })(
                  <Radio.Group>
                  <Radio value="0">拒绝</Radio>
                  <Radio value="1">通过</Radio>
                  <Radio value="2">待审核</Radio>                                     
                            </Radio.Group>
                        
                )}
                           
                  </FormItem>
                  <FormItem
                        {...formItemLayout}
                        label="是否拿到钥匙"
                      
                      > 
                       {getFieldDecorator('havekey', {
                            initialValue:this.props.content.havekey+'',

                })(
                  <Radio.Group>
                              <Radio value="0">否</Radio>
                              <Radio value="1">是</Radio>    
                                                                
                            </Radio.Group>
                )}
                            
                  </FormItem>
                  <FormItem
                         {...formItemLayout}
                         label="备注"
                       >
                        {getFieldDecorator('beizhu', {
                          initialValue:this.props.content.beizhu,

              })(
                <TextArea style={{ minHeight: 32,width:'400px' }} placeholder="" rows={4} />
                       
                      
              )}
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="ip"
                       >
                        
                         
                        {getFieldDecorator('ip', {
                            initialValue:this.props.content.ip,

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="来源"
                       >
                        
                       
                        {getFieldDecorator('bstatus', {
                            initialValue:this.props.content.bstatus+'',

                })(
                  <Radio.Group>
                  <Radio value="0">mobile</Radio>
                  <Radio value="1">pc</Radio>    
                  <Radio value="2">其他</Radio>                                         
                </Radio.Group>
                        
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
  return { content: state.reducers.content}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
const Bianji =Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(Bianji);