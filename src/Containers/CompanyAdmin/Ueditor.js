import React,{ Component } from 'react';



class Ueditor extends Component {
    componentDidMount(){
        var UE=new Date().UE;
        try{
            UE.getEditor(this.props.id).destroy();}
            catch(err){
                
            }//再次初始化有问题  要销毁原来的
        var editor = UE.getEditor(this.props.id, {
             lang:"zh-cn" ,initialFrameHeight: this.props.height , initialFrameWidth: '100%'
        });
        var me = this;
        editor.ready( function( ueditor ) {
            var value = me.props.value?me.props.value:'<p></p>';
            editor.setContent(value);
        });
    }
    render(){
        return (
            <div id={this.props.id} style={{width:'880px',height:'500px'}}></div>
        )
    }
}
export default Ueditor;

