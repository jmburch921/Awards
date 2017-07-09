
 <body>
                    <div class="row"><b>The api layer is in development at the moment.</b></div>
                    <div class="row">There will be daily deploys as the application progresses.</div>
                    <div class="row">All the api's are tested on localhost:3000.</div>
                    <div class="row">The database that is used is a postgres 9.6, and can be at <a href="https://www.postgresql.org/">https://www.postgresql.org/</a></div>
                    <div class="row">
                        <h4>REST API Database CRUDs</h4>
                    </div>
                    <div class="row">The following tables has basic CRUD apis added.</div>
                    <ul>
                        <li>1.1.<span style="color:#424005;font-weight:bold;">PersonInformationAttributes</span></li>
<ul>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonInformationAttributes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonInformationAttributes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/PersonInformationAttributes/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/PersonInformationAttributes [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/PersonInformationAttributes/1</li>
                        </ul>

                        <li>1.2.<span style="color:#424005;font-weight:bold;">EmploymentTypes</span></li>
                        <ul><b> <small><i>Type of employment a person can be in. For example Permanent, Contractor, Temp, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/EmploymentTypes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/EmploymentTypes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/EmploymentTypes/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/EmploymentTypes [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/EmploymentTypes/1</li>
                        </ul>

                        <li>1.3.<span style="color:#424005;font-weight:bold;">PersonTypes</span></li>
                        <ul><b> <small><i>Type of persons. For example Individual, Sales, Roaming, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonTypes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonTypes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/PersonTypes/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/PersonTypes [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/PersonTypes/1</li>
                        </ul>

                        <li>1.4.<span style="color:#424005;font-weight:bold;">IdentifierTypes</span></li>
                        <ul><b> <small><i>An Identifier type is the type of identification you would like to authorize the user against in the system. For example domain login, ID Number, employee number, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/IdentifierTypes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/IdentifierTypes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/IdentifierTypes/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/IdentifierTypes [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/IdentifierTypes/1</li>
                        </ul>

                        <li>1.5.<span style="color:#424005;font-weight:bold;">Roles</span></li>
                        <ul><b> <small><i>Roles in the system. For example Admin, User, SuperUser, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Roles</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Roles/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/Roles/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/Roles [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/Roles/1</li>
                        </ul>

                        <hr/>

                        <li>2.1.<span style="color:#424005;font-weight:bold;">Persons</span></li>
                        <ul><b> <small><i>Persons in the system. For example the administrator details.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Persons</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Persons/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/Persons/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/Persons [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/Persons/1</li>
                        </ul>

                        <li>2.2.<span style="color:#424005;font-weight:bold;">PersonEmploymentTypes</span></li>
                        <ul><b> <small><i>A person can be in one or more roles in a business , so this table allows for multiple employment types assigned to a user.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonEmploymentTypes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonEmploymentTypes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/PersonEmploymentTypes/1 [{"personId":"1","employmentTypeId":"1","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/PersonEmploymentTypes [{"personId":"1","employmentTypeId":"1"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/PersonEmploymentTypes/1</li>
                        </ul>

                        <li>2.3.<span style="color:#424005;font-weight:bold;">PersonInformationAttributeValues</span></li>
                        <ul><b> <small><i>This table contains the values of the attribues of the person's information.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonInformationAttributeValues</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonInformationAttributeValues/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/PersonInformationAttributeValues/1 [{"personId":"1","personInformationAttributeId":"2","itemValue":"1231234","isHiddenAttribute":
                                "0","inactive":"1","inactiveDate":"1900-12-31"}]
                            </li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/PersonInformationAttributeValues [{"personId":"1","personInformationAttributeId":"2","itemValue":"1231234","isHiddenAttribute":"0"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/PersonInformationAttributeValues/1</li>
                        </ul>

                        <li>2.4.<span style="color:#424005;font-weight:bold;">PersonRoles</span></li>
                        <ul><b> <small><i>This table contains the different roles a person is linked to.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonRoles</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/PersonRoles/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/PersonRoles/1 [{"personId":"1","personInformationAttributeId":"2","itemValue":"1231234","isHiddenAttribute":
                                "0","inactive":"1","inactiveDate":"1900-12-31"}]
                            </li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/PersonRoles [{"personId":"1","personInformationAttributeId":"2","itemValue":"1231234","isHiddenAttribute":"0"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/PersonRoles/1</li>
                        </ul>

                        <hr/>

                        <li>3.1.<span style="color:#424005;font-weight:bold;">GroupTypes</span></li>
                        <ul> <b> <small><i>Types of groups you would like to use in the system. For example System, Moderator, Individual, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/GroupTypes</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/GroupTypes/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/GroupTypes/1 [{"name":"nameValue","description":"descriptionValue","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/GroupTypes [{"name":"nameValue","description":"descriptionValue"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/GroupTypes/1</li>
                        </ul>

                        <hr/>

                        <li>4.1.<span style="color:#424005;font-weight:bold;">Groups</span></li>
                        <ul> <b> <small><i>Groups you would like to use in the system. <br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Groups</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/Groups/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/Groups/1 [{"groupTypeId":"1","roleId":"1","name":"JSon","description":"edited","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/Groups [{"groupTypeId":"1","roleId":"1","name":"JSon","description":"This
                                was added by a json post"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/Groups/1</li>
                        </ul>

                        <li>4.2.<span style="color:#424005;font-weight:bold;">GroupOfPersons</span></li>
                        <ul> <b> <small><i>Link a person to a group or multiple groups.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/GroupOfPersons</li>
                            <li><span style="color:darkgreen;font-weight:bold;">GET : </span>/api/v1/GroupOfPersons/1</li>
                            <li><span style="color:darkblue;font-weight:bold;">PUT : </span>/api/v1/GroupOfPersons/1 [{"groupId":"2","personId":"1","inactive":"1","inactiveDate":"1900-12-31"}]</li>
                            <li><span style="color:darkorange;font-weight:bold;">POST : </span>/api/v1/GroupOfPersons [{"groupId":"2","personId":"1"}]</li>
                            <li><span style="color:darkred;font-weight:bold;">DELETE : </span>/api/v1/GroupOfPersons/1</li>
                        </ul>

                        <hr/>







                        <li>5.4.PeriodTypes</li>
                    </ul>
    
</body>



