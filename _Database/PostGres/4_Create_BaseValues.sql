








CREATE TABLE public."NominationTypes"
(
    "NominationTypeId" integer NOT NULL,
    "Name" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "InActiveDate" date,
    "InActive" bit(1),
    CONSTRAINT "NominationTypes_pkey" PRIMARY KEY ("NominationTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;