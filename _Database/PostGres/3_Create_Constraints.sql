--Access on the database for AwardsDbUser

GRANT TEMPORARY, CONNECT ON DATABASE "Awards_Dev" TO PUBLIC;

GRANT ALL ON DATABASE "Awards_Dev" TO "Awards_Dev_User";

ALTER DEFAULT PRIVILEGES
GRANT ALL ON TABLES TO "Awards_Dev_User";

ALTER TABLE public."GroupTypes" OWNER TO "Awards_Dev_User";