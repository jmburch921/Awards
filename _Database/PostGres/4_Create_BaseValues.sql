
INSERT INTO public."ProgramAwardTypes"(
	"ProgramAwardTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'Personal', 'Personal award', '0', '1900-01-01'),
    (2, 'Group', 'Group award', '0', '1900-01-01'),
    (3, 'Other', 'Other award', '0', '1900-01-01');

INSERT INTO public."GroupTypes"(
	"GroupTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'System', 'System group', '0', '1900-01-01'),
    (2, 'Moderator', 'System group', '0', '1900-01-01'),
    (3, 'Individual', 'System group', '0', '1900-01-01'),
    (4, 'Team', 'Team group', '0', '1900-01-01'),
    (5, 'Business unit', 'Business unit group', '0', '1900-01-01'),
    (6, 'Department', 'Department group', '0', '1900-01-01'),
    (7, 'Cost centre', 'Cost centre group', '0', '1900-01-01'),
    (8, 'Company', 'Company group', '0', '1900-01-01'),
    (9, 'Adhoc', 'Adhoc group', '0', '1900-01-01'),
    (10, 'Other', 'Adhoc group', '0', '1900-01-01');

INSERT INTO public."PeriodTypes"(
	"PeriodTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES 
    (1, 'Daily', 'Daily award', '0', '1900-01-01'),
    (2, 'Weekly', 'Weekly award', '0', '1900-01-01'),
    (3, 'BiWeekly', 'BiWeekly award', '0', '1900-01-01'),
    (4, 'Monthly', 'Monthly award', '0', '1900-01-01'),
    (5, 'Quarterly', 'Quarterly award', '0', '1900-01-01'),
    (6, 'Trimester', 'Trimester award', '0', '1900-01-01'),
    (7, 'BiAnnual', 'BiAnnual award', '0', '1900-01-01'),
    (8, 'Annual', 'Annual award', '0', '1900-01-01'),
    (9, 'Adhoc', 'Adhoc award', '0', '1900-01-01'),
    (10, 'Other', 'Other award', '0', '1900-01-01');

INSERT INTO public."PersonTypes"(
	"PersonTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES
    (1, 'Individual', 'This person is a individual', '0', '1900-01-01'), 
    (2, 'Office', 'This person is a office worker', '0', '1900-01-01'),
    (3, 'Sales', 'This person is a sales rep', '0', '1900-01-01'),
    (4, 'Roaming', 'This person is a roaming employee', '0', '1900-01-01'),
    (5, 'Temp', 'This person is a temp', '0', '1900-01-01'),
    (6, 'Contractor', 'This person is a contrtactor', '0', '1900-01-01'),
    (7, 'Other', 'This person is an other type of employee', '0', '1900-01-01');

    
INSERT INTO public."Roles"(
	"RoleId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'Admin', 'System admin', '0', '1900-01-01'),
    (2, 'Moderator', 'Configuration of system', '0', '1900-01-01'),
    (3, 'Champion', 'Super user access', '0', '1900-01-01'),
    (4, 'Statistics', 'Statistical role', '0', '1900-01-01'),
    (5, 'Query', 'Query role', '0', '1900-01-01'),
    (6, 'User', 'User', '0', '1900-01-01'),
    (7, 'Manco', 'Manco manager', '0', '1900-01-01'),
    (8, 'Exco', 'Exco manger', '0', '1900-01-01'),
    (9, 'Manager', 'Manager', '0', '1900-01-01'),
    (10, 'HR', 'Human Resources', '0', '1900-01-01'),
    (11, 'Remuneration', 'When payment needs to be done', '0', '1900-01-01'),
    (12, 'SuperUser', 'Super user role', '0', '1900-01-01'),
    (13, 'Deligate', 'Deligate user role', '0', '1900-01-01'),
    (14, 'API', 'API role', '0', '1900-01-01');