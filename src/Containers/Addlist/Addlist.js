import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { Form, Input, DatePicker, Select, Button, Card, InputNumber, Radio, Icon, Tooltip, Cascader} from 'antd';
import moment from 'moment';
import './Addlist.css'

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

    handleSubmit=(e)=>{
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          ...fieldsValue,
          'rebacktime': fieldsValue['rebacktime'].format('X'),
        
        };

        this.props.addGaild(values)
      });
    
    }
    render(){
     
      const { getFieldDecorator} = this.props.form;
      var day = moment().format('YYYY/MM/DD')
      const config = { initialValue: moment(day,'YYYY/MM/DD') }
        return(
          
            <div className='Bianji'>
                 <FormItem
                         {...formItemLayout}
                         label="姓名"
                       >
                        
                        {getFieldDecorator('username', {
                initialValue:''

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 
                 <FormItem
                         {...formItemLayout}
                         label="小区名称"
                       >
                        
                        {getFieldDecorator('comm', {
                initialValue: ''

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                        {...formItemLayout}
                        label="性别"
                      
                      > 
                      {getFieldDecorator('sex', {
                initialValue: ''

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
                      
                initialValue: ''
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
                initialValue: ''

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
                           
                initialValue: ''
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
                           
                initialValue: ''
                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                    </FormItem>   
                    <FormItem
                         {...formItemLayout}
                         label="装修时间"
                       >
                        
                        {getFieldDecorator('zxtime', {
                initialValue: ''  

                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>  
                 <FormItem
                         {...formItemLayout}
                         label="装修面积"
                       >
                        
                        {getFieldDecorator('area', {
                           
                initialValue: ''
                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="联系电话"
                       >
                        
                        {getFieldDecorator('mobile', {
                           
                initialValue: ''
                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="装修要求"
                       >
                        
                        {getFieldDecorator('zxyaoqiu', {
                initialValue: ''   

                })(
                  <TextArea style={{ minHeight: 32,width:'400px' }} placeholder="" rows={4} />
                         
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="量房时间"
                       >
                        
                        {getFieldDecorator('lftime', {
                          
                initialValue: ''
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
                       
                initialValue: ''
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
                initialValue: '',

              })(
                <TextArea style={{ minHeight: 32,width:'400px' }} placeholder="" rows={4} />
                       
                      
              )}
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="ip"
                       >
                        
                         
                        {getFieldDecorator('ip', {
                           
                initialValue: ''
                })(
                  <Input style={{width:'200px'}}  />
                        
                )}
                         
                 </FormItem>
                 <FormItem
                         {...formItemLayout}
                         label="来源"
                       >
                        
                       
                        {getFieldDecorator('bstatus', {
                           
                initialValue: ''
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
  return { content:state.reducers.content}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
const Addlist =Form.create()(Index);
export default connect(mapStateToProps, mapDispatchToProps)(Addlist);
