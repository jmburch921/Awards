

--||===============||--
--|| PERSON TABLES ||--
--||===============||--
-- Persons has base tables for:
-- PersonInformationAttribute - where any other information of the person can be stored
-- Employment type - a person can be defined by one or more employment types.
-- PersonTypes - Office worker , sales, etc.
-- IdentifierType - a unique identifier that the user can use , for example domain login.
-- Roles - a person can be assigned multiple roles in the system.
--||====================||--
--|| BASE PERSON TABLES ||--
--||====================||--
--|| NO 1.1 ||--
CREATE TABLE public."PersonInformationAttributes"
(
    "PersonInformationAttributeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonInformationAttributes_pkey" PRIMARY KEY ("PersonInformationAttributeId"),
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PersonInformationAttributes" OWNER TO "Awards_Dev_User";

--|| NO 1.2 ||--
CREATE TABLE public."EmploymentTypes"
(
    "EmploymentTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "EmploymentTypes_pkey" PRIMARY KEY ("EmploymentTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."EmploymentTypes" OWNER TO "Awards_Dev_User";

--|| NO 1.3 ||--
CREATE TABLE public."PersonTypes"
(
    "PersonTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonTypes_pkey" PRIMARY KEY ("PersonTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PersonTypes" OWNER TO "Awards_Dev_User";

--|| NO 1.4 ||--
CREATE TABLE public."IdentifierTypes"
(
    "IdentifierTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "IdentifierTypes_pkey" PRIMARY KEY ("IdentifierTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."IdentifierTypes" OWNER TO "Awards_Dev_User";

--|| NO 1.5 ||--
CREATE TABLE public."Roles"
(
    "RoleId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Roles_pkey" PRIMARY KEY ("RoleId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."Roles" OWNER TO "Awards_Dev_User";


--||===============||--
--|| PERSON TABLES ||--
--||===============||--
--|| NO 2.1 ||--
CREATE TABLE public."Persons"
(
    "PersonId" integer NOT NULL,
    "PersonTypeId" integer NOT NULL,
    "IdentifierTypeId" integer NOT NULL,
    "IdentifierValue" character varying COLLATE pg_catalog."default", 
    "ManagerPersonId" integer NULL,
    "Firstname" character varying COLLATE pg_catalog."default",
    "Lastname" character varying COLLATE pg_catalog."default",     
    "EMail" character varying COLLATE pg_catalog."default",    
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Persons_pkey" PRIMARY KEY ("PersonId"),
    CONSTRAINT "Persons_PersonTypes_fkey" FOREIGN KEY ("PersonTypeId")
        REFERENCES public."PersonTypes" ("PersonTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Persons_IdentifierTypes_fkey" FOREIGN KEY ("IdentifierTypeId")
        REFERENCES public."IdentifierTypes" ("IdentifierTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Persons_Persons_fkey" FOREIGN KEY ("ManagerPersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."Persons" OWNER TO "Awards_Dev_User";

--|| NO 2.2 ||--
CREATE TABLE public."PersonEmploymentTypes"
(
    "PersonEmploymentTypeId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "EmploymentTypeId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonEmploymentTypes_pkey" PRIMARY KEY ("PersonEmploymentTypeId"),
    CONSTRAINT "PersonEmploymentTypes_EmploymentTypes_fkey" FOREIGN KEY ("EmploymentTypeId")
        REFERENCES public."EmploymentTypes" ("EmploymentTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "PersonEmploymentTypes_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PersonEmploymentTypes" OWNER TO "Awards_Dev_User";

--|| NO 2.3 ||--
CREATE TABLE public."PersonInformationAttributeValues"
(
    "PersonInformationAttributeValueId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "PersonInformationAttributeId"integer NOT NULL,
    "Value" character varying COLLATE pg_catalog."default",
    "IsHiddenAttribute" bit(1),
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonInformationAttributeValues_pkey" PRIMARY KEY ("PersonInformationAttributeValueId"),
    CONSTRAINT "PersonInformationAttributeValues_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "PersonInformationAttributeValues_PersonInformationAttributes_fkey" FOREIGN KEY ("PersonInformationAttributeId")
        REFERENCES public."PersonInformationAttributes" ("PersonInformationAttributeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PersonInformationAttributeValues" OWNER TO "Awards_Dev_User";

--|| NO 2.4 ||--
CREATE TABLE public."PersonRoles"
(
    "PersonRoleId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "RoleId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonRoles_pkey" PRIMARY KEY ("PersonRoleId"),
    CONSTRAINT "PersonRoles_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "PersonRoles_Roles_fkey" FOREIGN KEY ("RoleId")
        REFERENCES public."Roles" ("RoleId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PersonRoles" OWNER TO "Awards_Dev_User";







--||===============||--
--|| GROUP TABLES  ||--
--||===============||--
-- Group has base tables for:
-- GroupTypes -System , moderator , admin , user , superuser
-- GroupsOfPersons - a person can be added to a group, and inherit the role from the group.
--||====================||--
--|| BASE GROUP TABLES ||--
--||====================||--
--|| NO 3.1 ||--
CREATE TABLE public."GroupTypes"
(
    "GroupTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupTypes_pkey" PRIMARY KEY ("GroupTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."GroupTypes" OWNER TO "Awards_Dev_User";

--||===============||--
--||  GROUP TABLES ||--
--||===============||--
--|| NO 4.1 ||--
CREATE TABLE public."Groups"
(
    "GroupId" integer NOT NULL,
    "GroupTypeId" integer NOT NULL,
    "RoleId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Groups_pkey" PRIMARY KEY ("GroupId"),
    CONSTRAINT "Groups_GroupTypes_fkey" FOREIGN KEY ("GroupTypeId")
        REFERENCES public."GroupTypes" ("GroupTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Groups_Roles_fkey" FOREIGN KEY ("RoleId")
        REFERENCES public."Roles" ("RoleId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."Groups" OWNER TO "Awards_Dev_User";

--|| NO 4.2 ||--
CREATE TABLE public."GroupOfPersons"
(
    "GroupOfPersonId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupOfPersons_pkey" PRIMARY KEY ("GroupOfPersonId"),
    CONSTRAINT "GroupOfPersons_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "GroupOfPersons_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."GroupOfPersons" OWNER TO "Awards_Dev_User";






--||===============||--
--|| PROGRAM TABLES  ||--
--||===============||--
-- Program has base tables for:
-- ProgramGroup -Grouping of people for a program.
--||====================||--
--|| BASE PROGRAM TABLES ||--
--||====================||--
--|| NO 5.1 ||--
CREATE TABLE public."EntityTypes"
(
    "EntityTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,  
    "InActive" bit(1),      
    CONSTRAINT "EntityTypes_pkey" PRIMARY KEY ("EntityTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."EntityTypes" OWNER TO "Awards_Dev_User";

--|| NO 5.2 ||--
CREATE TABLE public."ProgramInformationAttributes"
(
    "ProgramInformationAttributeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramInformationAttributes_pkey" PRIMARY KEY ("ProgramInformationAttributeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramInformationAttributes" OWNER TO "Awards_Dev_User";

--|| NO 5.3 ||--
CREATE TABLE public."PeriodStatus"
(
    "PeriodStatuId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "PeriodStatus_pkey" PRIMARY KEY ("PeriodStatuId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PeriodStatus" OWNER TO "Awards_Dev_User";

--|| NO 5.4 ||--
CREATE TABLE public."PeriodTypes"
(
    "PeriodTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "PeriodTypes_pkey" PRIMARY KEY ("PeriodTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."PeriodTypes" OWNER TO "Awards_Dev_User";

--||=================||--
--||  PROGRAM TABLES ||--
--||=================||--
--|| NO 6.1 ||--
CREATE TABLE public."Programs"
(
    "ProgramId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "Programs_pkey" PRIMARY KEY ("ProgramId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."Programs" OWNER TO "Awards_Dev_User";

--|| NO 6.2 ||--
CREATE TABLE public."ProgramGroups"
(
    "ProgramGroupId" integer NOT NULL,
    "ProgramId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramGroups_pkey" PRIMARY KEY ("ProgramGroupId"),
    CONSTRAINT "ProgramGroups_Programs_fkey" FOREIGN KEY ("ProgramId")
        REFERENCES public."Programs" ("ProgramId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ProgramGroups_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramGroups" OWNER TO "Awards_Dev_User";

--|| NO 6.3 ||--
CREATE TABLE public."ProgramInformationAttributeValues"
(
    "ProgramInformationAttributeValueId" integer NOT NULL,
    "ProgramId" integer NOT NULL,
    "ProgramInformationAttributeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramInformationAttributeValues_pkey" PRIMARY KEY ("ProgramInformationAttributeValueId"),
    CONSTRAINT "ProgramInformationAttributeValues_Programs_fkey" FOREIGN KEY ("ProgramId")
        REFERENCES public."Programs" ("ProgramId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ProgramInformationAttributeValues_ProgramInformationAttributes_fkey" FOREIGN KEY ("ProgramInformationAttributeId")
        REFERENCES public."ProgramInformationAttributes" ("ProgramInformationAttributeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramInformationAttributeValues" OWNER TO "Awards_Dev_User";

--|| NO 6.4 ||--
CREATE TABLE public."ProgramEntityTypes"
(
    "ProgramEntityTypeId" integer NOT NULL,
    "ProgramId" integer NOT NULL,
    "EntityTypeId" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramEntityTypes_pkey" PRIMARY KEY ("ProgramEntityTypeId"),
    CONSTRAINT "ProgramEntityTypes_Programs_fkey" FOREIGN KEY ("ProgramId")
        REFERENCES public."Programs" ("ProgramId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ProgramEntityTypes_EntityTypes_fkey" FOREIGN KEY ("EntityTypeId")
        REFERENCES public."EntityTypes" ("EntityTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramEntityTypes" OWNER TO "Awards_Dev_User";

--|| NO 6.5 ||--
-- Create a link between the program and the award type for a period
-- This allows group types to have different periods from other types in the same programme
-- For example the group nominations can only be made in a ceratain date range near the nd of the period
-- While other nominations can remain open
CREATE TABLE public."ProgramEntityTypePeriods"
(
    "ProgramEntityTypePeriodId" integer NOT NULL,    
    "ProgramEntityTypeId" integer NOT NULL,    
    "PeriodStatuId" integer NOT NULL,
    "PeriodTypeId" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramEntityTypePeriods_pkey" PRIMARY KEY ("ProgramEntityTypePeriodId"),
    CONSTRAINT "ProgramEntityTypePeriods_ProgramEntityTypes_fkey" FOREIGN KEY ("ProgramEntityTypeId")
        REFERENCES public."ProgramEntityTypes" ("ProgramEntityTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ProgramEntityTypePeriods_PeriodStatus_fkey" FOREIGN KEY ("PeriodStatuId")
        REFERENCES public."PeriodStatus" ("PeriodStatuId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "ProgramEntityTypePeriods_PeriodTypes_fkey" FOREIGN KEY ("PeriodTypeId")
        REFERENCES public."PeriodTypes" ("PeriodTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramEntityTypePeriods" OWNER TO "Awards_Dev_User";

--|| NO 6.6 ||--
CREATE TABLE public."ProgramCriteriaTypes"
(
    "ProgramCriteriaTypeId" integer NOT NULL,    
    "ProgramEntityTypeId" integer NOT NULL,    
    "Name" integer NOT NULL,
    "Description" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramCriteriaTypes_pkey" PRIMARY KEY ("ProgramCriteriaTypeId"),
    CONSTRAINT "ProgramCriteriaTypes_ProgramEntityTypes_fkey" FOREIGN KEY ("ProgramEntityTypeId")
        REFERENCES public."ProgramEntityTypes" ("ProgramEntityTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramCriteriaTypes" OWNER TO "Awards_Dev_User";


--|| NO 6.7 ||--
CREATE TABLE public."ProgramCriterias"
(
    "ProgramCriteriaId" integer NOT NULL,    
    "ProgramCriteriaTypeId" integer NOT NULL,    
    "Name" integer NOT NULL,
    "Description" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramCriteriaTypes_pkey" PRIMARY KEY ("ProgramCriteriaTypeId"),
    CONSTRAINT "ProgramCriteriaTypes_ProgramCriteriaTypes_fkey" FOREIGN KEY ("ProgramCriteriaTypeId")
        REFERENCES public."ProgramCriteriaTypes" ("ProgramCriteriaTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."ProgramCriteriaTypes" OWNER TO "Awards_Dev_User";