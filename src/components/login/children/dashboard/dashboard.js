import { NavLink, useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
import  axios from 'axios';
import DashboardHome from './children/AddUser'


function Items(props){
	return(
		<div>
			{props.data.map((s) => (
				<div className='m-2 p-2 border border-light rounded items'>
					{s.title}
					<i className="fa fa-bell" aria-hidden="true"></i>
					<i className="fa fa-paint-brush" aria-hidden="true"></i>
					<i className="fa fa-trash" aria-hidden="true"></i>

					{s.examination_notice && <h5>Examination</h5>}
					{s.notices && <a href={s.notices}>View</a>}
					
					{s.news && <a href={s.news}>View</a>}
					
					{s.events && <a href={s.events}>View</a>}

					{s.time_table && <a href={s.time_table}>View</a>}
					{s.semester && <p>Semester{s.semester} Branch {s.branch_section}</p>}

					{s.LecturePlan && <a href={s.LecturePlan}>View</a>}
					{s.subject && <p>Subject {s.subject}</p>}

					{s.Project_title && <p>Project_title {s.Project_title}</p>}
					{s.description && <p>description : {s.description}</p>}
					{s.project_pic && <img src={s.project_pic} alt="" />}

					{s.paper_title && <p>paper_title : {s.paper_title}</p>}
					{s.indexing && <p>indexing : {s.indexing}</p>}
					{s.isbn_no && <p>isbn_no : {s.isbn_no}</p>}
					{s.volume && <p>volume : {s.volume}</p>}
					{s.journal && <p>journal : {s.journal}</p>}


					<br></br>
				</div>
			))}
		</div>
	);
}



function Dashboard(props){
	var history = useHistory()
	let [element,setElement] = useState();

	const branch = localStorage.getItem('branch');
	const url = `departments/${branch}/${props.page}`;

	useEffect(() => {
		if(props.page==='home'){
			setElement(<DashboardHome />)
		}
		else{
			axios.get(url)
			.then(response => {
					setElement(<Items
						data = {response.data}
				/>)
			})
			.catch(error => {
				console.log(error)
			})
		}
	},[props.page,url])



	if(!localStorage.getItem('token')){
		history.push('/')
		alert('Please login first')
	}

	return(
		<div className='container-fluid pt-5'>
			<div className="row">
				<div className="col-lg-3 mb-5">
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/home">Home</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/notice" >Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/events" >Events</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/news" >News</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/student-publication" >Student Publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/faculty-publication" >Faculty Publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/time-table" >Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/student-projects" >Student Projects</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/lesson-plan" >Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to='/' onClick={() => localStorage.clear()} >Logout</NavLink>
					</div>
				</div>
				<div class="col-sm-9 content my-2">
					{element}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;