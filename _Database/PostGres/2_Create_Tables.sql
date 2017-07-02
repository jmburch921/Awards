

--Groups define the process of people grouped together , in teams department or company.
CREATE TABLE public."GroupCss"
(
    "GroupCssId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "CssValue" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupCss_pkey" PRIMARY KEY ("GroupCssId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

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
    "GroupCssId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "Groups_pkey" PRIMARY KEY ("GroupId"),
    CONSTRAINT "Groups_GroupCss_fkey" FOREIGN KEY ("GroupCssId")
        REFERENCES public."GroupCss" ("GroupCssId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Groups_GroupTypes_fkey" FOREIGN KEY ("GroupTypeId")
        REFERENCES public."GroupTypes" ("GroupTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


--Persons and person types ( Person types can be difined as permanent , temp or contractor or any other type that is needed.)
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


--Group setup , persons in the group , and what types of persons can be added to the group.
--Groups gets created for groups and then the group type gets defined with roles and person types that can belong to the groups.
--This enables the system to have different roles for different person types.
CREATE TABLE public."GroupPersons"
(
    "GroupPersonId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "PersonId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupPersons_pkey" PRIMARY KEY ("GroupPersonId"),
    CONSTRAINT "GroupPersons_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "GroupPersons_Persons_fkey" FOREIGN KEY ("PersonId")
        REFERENCES public."Persons" ("PersonId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public."GroupGrantPersonTypes"
(
    "GroupGrantPersonTypeId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "PersonTypeId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupGrantPersonTypes_pkey" PRIMARY KEY ("GroupGrantPersonTypeId"),
    CONSTRAINT "GroupGrantPersonTypes_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "GroupGrantPersonTypes_PersonTypes_fkey" FOREIGN KEY ("PersonTypeId")
        REFERENCES public."PersonTypes" ("PersonTypeId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
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

CREATE TABLE public."GroupGrantRoles"
(
    "GroupGrantRoleId" integer NOT NULL,
    "GroupId" integer NOT NULL,
    "RoleId" integer NOT NULL,
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "GroupGrantRoles_pkey" PRIMARY KEY ("GroupGrantRoleId"),
    CONSTRAINT "GroupGrantRoles_Groups_fkey" FOREIGN KEY ("GroupId")
        REFERENCES public."Groups" ("GroupId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "GroupGrantRoles_PersonTypes_fkey" FOREIGN KEY ("RoleId")
        REFERENCES public."Roles" ("RoleId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;









CREATE TABLE public."AwardPrograms"
(
    "AwardProgramId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "AwardPrograms_pkey" PRIMARY KEY ("AwardProgramId")
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


CREATE TABLE public."AwardTypes"
(
    "AwardTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActive" bit(1),
    "InActiveDate" date,    
    CONSTRAINT "AwardTypes_pkey" PRIMARY KEY ("AwardTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;