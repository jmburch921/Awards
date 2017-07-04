


--== PERSON DEFINITION ==--
--Persons and person types ( Person types can be difined as permanent , temp or contractor or any other type that is needed.)
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

--Roles and persons in that roles
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

CREATE TABLE public."Persons"
(
    "PersonId" integer NOT NULL,
    "PersonTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Surname" character varying COLLATE pg_catalog."default",     
    "DomainLogin" character varying COLLATE pg_catalog."default",      
    "EMail" character varying COLLATE pg_catalog."default",    
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Persons_pkey" PRIMARY KEY ("PersonId"),
    CONSTRAINT "Persons_PersonTypes_fkey" FOREIGN KEY ("PersonTypeId")
        REFERENCES public."PersonTypes" ("PersonTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."PersonEmploymentTypes"
(
    "PersonEmploymentTypeId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "EmploymentTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
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

CREATE TABLE public."PersonInformations"
(
    "PersonInformationId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "Phone" character varying COLLATE pg_catalog."default",
    "Fax" character varying COLLATE pg_catalog."default",
    "Email" character varying COLLATE pg_catalog."default",
    "Address" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "PersonInformations_pkey" PRIMARY KEY ("PersonInformationId"),
    CONSTRAINT "PersonInformations_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


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


--== GROUPS DEFINITIION ==--
--Groups define the process of people grouped together , in teams department or company.
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

CREATE TABLE public."Groups"
(
    "GroupId" integer NOT NULL,
    "GroupTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Groups_pkey" PRIMARY KEY ("GroupId"),
    CONSTRAINT "Groups_GroupTypes_fkey" FOREIGN KEY ("GroupTypeId")
        REFERENCES public."GroupTypes" ("GroupTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

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


--==BUSINESS PROGRAM ==--
CREATE TABLE public."BusinessPrograms"
(
    "BusinessProgramId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "BusinessPrograms_pkey" PRIMARY KEY ("BusinessProgramId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."ProgramAwardTypes"
(
    "ProgramAwardTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "ProgramAwardTypes_pkey" PRIMARY KEY ("ProgramAwardTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."BusinessProgramAwardTypes"
(
    "BusinessProgramAwardTypeId" integer NOT NULL,
    "BusinessProgramId" integer NOT NULL,
    "ProgramAwardTypeId" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "BusinessProgramAwardTypes_pkey" PRIMARY KEY ("BusinessProgramAwardTypeId"),
    CONSTRAINT "BusinessProgramAwardTypes_BusinessPrograms_fkey" FOREIGN KEY ("BusinessProgramId")
        REFERENCES public."BusinessPrograms" ("BusinessProgramId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "BusinessProgramAwardTypes_ProgramAwardTypes_fkey" FOREIGN KEY ("ProgramAwardTypeId")
        REFERENCES public."ProgramAwardTypes" ("ProgramAwardTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."BusinessProgramGroups"
(
    "BusinessProgramGroupId" integer NOT NULL,
    "BusinessProgramId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "BusinessProgramGroups_pkey" PRIMARY KEY ("BusinessProgramGroupId"),
    CONSTRAINT "BusinessProgramGroups_BusinessPrograms_fkey" FOREIGN KEY ("BusinessProgramId")
        REFERENCES public."BusinessPrograms" ("BusinessProgramId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "BusinessProgramGroups_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;








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
