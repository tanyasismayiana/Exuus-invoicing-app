CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE SEQUENCE invoice_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE SEQUENCE client_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE SEQUENCE items_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE SEQUENCE payments_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE TYPE payment_status AS ENUM ('paid', 'pending', 'unpaid');

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "user_name" character varying(255) NOT NULL,
    "email" text NOT NULL,
    "password" character varying(100) NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW()
) WITH (oids = false);

CREATE TABLE "public"."clients" (
     "id" integer DEFAULT nextval('client_id_seq') NOT NULL,
     "number" character varying(255) NOT NULL,
     "name"  character varying(255) NOT NULL,
     "deleted" BOOLEAN NOT NULL,
     "created_at" TIMESTAMP DEFAULT NOW(),
     "updated_at" TIMESTAMP DEFAULT NOW()
) WITH (oids = false);

CREATE TABLE "public"."items" (
     "id" integer DEFAULT nextval('items_id_seq') NOT NULL,
     "number" character varying(255) NOT NULL,
     "name"  character varying(255) NOT NULL,
     "deleted" BOOLEAN NOT NULL,
     "created_at" TIMESTAMP DEFAULT NOW(),
     "updated_at" TIMESTAMP DEFAULT NOW()
) WITH (oids = false);

CREATE TABLE "public"."invoices" (
     "id" integer DEFAULT nextval('invoice_id_seq') NOT NULL,
     "number" character varying(255) NOT NULL,
     "client_id"  integer NOT NULL,
     "item_id"  integer NOT NULL,
     "amount"  DOUBLE PRECISION NOT NULL,
     "payment_status"  payment_status,
     "notes" text,
     "created_at" TIMESTAMP DEFAULT NOW(),
     "updated_at" TIMESTAMP DEFAULT NOW()
) WITH (oids = false);

CREATE TABLE "public"."payments" (
     "id" integer DEFAULT nextval('items_id_seq') NOT NULL,
     "number" character varying(255) NOT NULL,
     "amount" DOUBLE PRECISION  NOT NULL,
     "invoice_id"  integer NOT NULL,
     "created_at" TIMESTAMP DEFAULT NOW(),
     "updated_at" TIMESTAMP DEFAULT NOW()
) WITH (oids = false);

INSERT INTO "users" ("id", "user_name", "email", "password") VALUES
(1,	'Stephen','tanyamayiana@gmail.com',	'123'),
(2,	'Felipe', 'ruthmayiana@gmail.com',	'456'),
(3,	'Pasha',	'mayamayiana@gmail.com',	'7890');

INSERT INTO "clients" ("id", "name", "number", "deleted") VALUES
(1,	'Stephen',	'123', false),
(2,	'Felipe',	'123', false),
(3,	'Pasha',	'123', false);

INSERT INTO "items" ("id", "name", "number", "deleted") VALUES
(1,	'table','123', false),
(2,	'computer','456', false),
(3,	'phone',	'7890', false);

