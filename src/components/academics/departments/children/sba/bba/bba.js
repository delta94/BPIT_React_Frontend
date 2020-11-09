import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';

function Bba(){
	let [element,setElement] = useState(null);

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div className="container-fluid mt-5">
			<div className='row'>
				<div className='col-lg-3'>
					<div className='sidebar bg-light p-2'>
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/about" onClick={() => handleComponent()}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/faculty" onClick={() => handleComponent()}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<hr />
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/bba/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Bba ;