import React from 'react'
import {connect} from 'react-redux'
import { Carousel } from 'antd';
class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<div className='courseListBox'>
          {/* 轮播图 */}
          <Carousel autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                 <h3>2</h3>
            </div>
            <div>
                 <h3>3</h3>
            </div>
            <div>
                 <h3>4</h3>
            </div>
            </Carousel>
          </div>
    }
}
export default connect()(List);