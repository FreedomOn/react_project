import React from 'react'
import {Switch,Route} from 'react-router-dom'
import List from './course/List'
import Info from './course/info'
import '../static/css/course.less'
class Home extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<section className='courseBox'>
            <Switch>
                <Route path='/course' exact component={List}></Route>
                <Route path='/course/info' component={Info}></Route>
            </Switch>
        </section>
    }
}
export default Home;