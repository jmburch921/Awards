<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Awards application</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous">

    <link rel="stylesheet" href="css/client.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <!-- NAV START -->
    <nav class="navbar  navbar-inverse navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
                <a class="navbar-brand" href="/home"><img src="images/ribbon24x24.png"/></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="/people">People <span class="sr-only">(current)</span></a></li>
                    <li><a href="/programmes">Programs</a></li>
                    <li><a href="/ascriptions">Ascriptions</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Info <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/aboutapi">The API layer</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/contactus">Contact us</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <!-- NAV END -->
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3><img src="images/trophy36x36.png" />&nbsp;The API layer</h3>
            </div>
            <div class="panel-body">
                <div style="padding:15px;">
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

                        <ul><b> <small><i>Attributes you would like to record for a person , that is more fluid than hard person data. For example Fax, Street address, Home phone, etc.<br/>
                        Tested and saved on postman. POST automatically increments the last record number by 1</i></small></b>
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
                </div>
            </div>
            <div class="panel-footer">
                <div class="well">This document will be updated as i continue to develop the system..</div>
            </div>
        </div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</body>

</html>




