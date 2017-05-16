import React ,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import axios from 'axios';
import bindActionCreators from 'redux';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state={
      course :{title:""}
    };

    this.onTittleChange = this.onTittleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTittleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    this.props.action.createCourse(this.state.course);
  }

  courseRow(course,index){
    return <div key ={index} >{course.title}</div>;
  }



  render() {
    return(
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add courses</h2>
        <input
          type="text"
          onChange = {this.onTittleChange}
          value = {this.state.course.title} />
        <input
          type="submit"
          value = "Save"
          onClick = {this.onClickSave} />
      </div>
    );

  }
}

function mapStateToProps(state,ownProps){
  return{
    courses:state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CoursesPage);
