import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import StudentList from '../pages/Students/StudentList';
import StudentNew from '../pages/Students/StudentNew';
import StudentEdit from '../pages/Students/StudentEdit';

import PlanList from '../pages/Plans/PlanList';
import PlanNew from '../pages/Plans/PlanNew';
import PlanEdit from '../pages/Plans/PlanEdit';

import EnrollmentList from '../pages/Enrollments/EnrollmentList';
import EnrollmentNew from '../pages/Enrollments/EnrollmentNew';
import EnrollmentEdit from '../pages/Enrollments/EnrollmentEdit';

import HelpOrderList from '../pages/HelpOrders/HelpOrderList';
import HelpOrderAnswer from '../pages/HelpOrders/HelpOrderAnswer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students/list" component={StudentList} />
      <Route path="/students/new" component={StudentNew} />
      <Route path="/students/edit/:id" component={StudentEdit} />

      <Route path="/plans/list" component={PlanList} />
      <Route path="/plans/new" component={PlanNew} />
      <Route path="/plans/edit/:id" component={PlanEdit} />

      <Route path="/enrollments/list" component={EnrollmentList} />
      <Route path="/enrollments/new" component={EnrollmentNew} />
      <Route path="/enrollments/edit/:id" component={EnrollmentEdit} />

      <Route path="/helporders/list" component={HelpOrderList} />
      <Route path="/helporders/answer/:id" component={HelpOrderAnswer} />
    </Switch>
  );
}
