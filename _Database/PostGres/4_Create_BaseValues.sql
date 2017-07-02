

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


INSERT INTO public."GroupTypes"(
	"GroupTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'Team', 'Team group', '0', '1900-01-01'),
    (2, 'Business unit', 'Business unit group', '0', '1900-01-01'),
    (3, 'Department', 'Department group', '0', '1900-01-01'),
    (4, 'Cost centre', 'Cost centre group', '0', '1900-01-01'),
    (5, 'Company', 'Company group', '0', '1900-01-01'),
    (6, 'Adhoc', 'Adhoc group', '0', '1900-01-01'),
    (7, 'Other', 'Adhoc group', '0', '1900-01-01');

    
INSERT INTO public."AwardTypes"(
	"AwardTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'Personal', 'Personal award', '0', '1900-01-01'),
    (2, 'Group', 'Group award', '0', '1900-01-01'),
    (3, 'Other', 'Other award', '0', '1900-01-01');

    
INSERT INTO public."PersonTypes"(
	"PersonTypeId", "Name", "Description", "InActive", "InActiveDate")
	VALUES (1, 'Office', 'This person is a office worker', '0', '1900-01-01'),
    (2, 'Sales', 'This person is a sales rep', '0', '1900-01-01'),
    (3, 'Roaming', 'This person is a roaming employee', '0', '1900-01-01'),
    (4, 'Temp', 'This person is a temp', '0', '1900-01-01'),
    (5, 'Contractor', 'This person is a contrtactor', '0', '1900-01-01'),
    (6, 'Other', 'This person is an other type of employee', '0', '1900-01-01');