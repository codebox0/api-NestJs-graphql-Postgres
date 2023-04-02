-- Table: public.user

-- DROP TABLE IF EXISTS public."user";
CREATE TYPE user_role_enum AS ENUM ('ADMIN', 'USER');


CREATE TABLE IF NOT EXISTS public."user"
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    "firstName" character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    role user_role_enum NOT NULL DEFAULT 'USER'::user_role_enum,
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id),
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email)
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES ('john', 'Doe', 'johndoe@gmail.com', '123', 'ADMIN');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES ('Zouch','Robinetta','rzouch3@quantcast.com','3U6OD1','USER');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES (
           'Rennick','Thorin','trennick4@ask.com','XRn7VwA','USER');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES (
           'Leppo','Tildie','tleppo5@berkeley.edu','EWWqCON7','USER');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES (
           'Lergan','Delmar','dlergan6@de.vu','A45g8J','USER');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES (
           'Bovey','Bald','bbovey7@discuz.net','nWGIeO','USER');

INSERT INTO public."user"(
    name, "firstName", email, password, role)
VALUES ('Aldrich','Lisa','laldrich2@admin.ch','cPWEzU9ldbwO','ADMIN');

