import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import {getAdData} from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data:[]
        }
    }
    render() {
        return (
            <h1>{ 
                this.state.data.length
                ? <HomeAd data={this.state.data} />
                : <div>{/* 加载中... */}</div>
            }</h1>
        )
    }
    componentDidMount() {
    	const result = getAdData();
    	result.then(res => {
            return res.json()
        }).then(json => {
    		const data = json;
    		if(data.length){
    			this.setState({
    				data : data
    			})
    		}
    	}).catch(ex=>{
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        
    	})
    }
}


module.exports = Ad