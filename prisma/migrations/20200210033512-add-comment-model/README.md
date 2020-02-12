# Migration `20200210033512-add-comment-model`

This migration has been generated by fastspeeed at 2/10/2020, 3:35:12 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Province" (
    "confirmedCount" INTEGER NOT NULL DEFAULT 0 ,
    "confirmedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "country" TEXT NOT NULL  ,
    "curedCount" INTEGER NOT NULL DEFAULT 0 ,
    "curedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "deadCount" INTEGER NOT NULL DEFAULT 0 ,
    "deadCountY" INTEGER NOT NULL DEFAULT 0 ,
    "id" TEXT NOT NULL  ,
    "suspectedCount" INTEGER NOT NULL DEFAULT 0 ,
    "suspectedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "title" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id"),FOREIGN KEY ("country") REFERENCES "Country"("id") ON DELETE RESTRICT
) 

INSERT INTO "new_Province" ("country","id","title") SELECT "country","id","title" from "Province"

DROP TABLE "quaint"."Province";

ALTER TABLE "quaint"."new_Province" RENAME TO "Province";

CREATE UNIQUE INDEX "quaint"."Province.title" ON "Province"("title")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_City" (
    "confirmedCount" INTEGER NOT NULL DEFAULT 0 ,
    "confirmedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "curedCount" INTEGER NOT NULL DEFAULT 0 ,
    "curedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "deadCount" INTEGER NOT NULL DEFAULT 0 ,
    "deadCountY" INTEGER NOT NULL DEFAULT 0 ,
    "id" TEXT NOT NULL  ,
    "province" TEXT NOT NULL  ,
    "suspectedCount" INTEGER NOT NULL DEFAULT 0 ,
    "suspectedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "title" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id"),FOREIGN KEY ("province") REFERENCES "Province"("id") ON DELETE RESTRICT
) 

INSERT INTO "new_City" ("id","province","title") SELECT "id","province","title" from "City"

DROP TABLE "quaint"."City";

ALTER TABLE "quaint"."new_City" RENAME TO "City";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Country" (
    "confirmedCount" INTEGER NOT NULL DEFAULT 0 ,
    "confirmedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "continents" TEXT   ,
    "curedCount" INTEGER NOT NULL DEFAULT 0 ,
    "curedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "deadCount" INTEGER NOT NULL DEFAULT 0 ,
    "deadCountY" INTEGER NOT NULL DEFAULT 0 ,
    "id" TEXT NOT NULL  ,
    "suspectedCount" INTEGER NOT NULL DEFAULT 0 ,
    "suspectedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "title" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id")
) 

INSERT INTO "new_Country" ("continents","id","title") SELECT "continents","id","title" from "Country"

DROP TABLE "quaint"."Country";

ALTER TABLE "quaint"."new_Country" RENAME TO "Country";

CREATE UNIQUE INDEX "quaint"."Country.title" ON "Country"("title")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_CountryRecord" (
    "confirmedAddCount" INTEGER   ,
    "confirmedCount" INTEGER NOT NULL DEFAULT 0 ,
    "confirmedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "continents" TEXT   ,
    "country" TEXT NOT NULL  ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "curedAddCount" INTEGER   ,
    "curedCount" INTEGER NOT NULL DEFAULT 0 ,
    "curedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "deadAddCount" INTEGER   ,
    "deadCount" INTEGER NOT NULL DEFAULT 0 ,
    "deadCountY" INTEGER NOT NULL DEFAULT 0 ,
    "id" TEXT NOT NULL  ,
    "recordAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "seriousAddCount" INTEGER   ,
    "seriousCount" INTEGER   ,
    "sourceUrl" TEXT NOT NULL DEFAULT '' ,
    "suspectedAddCount" INTEGER   ,
    "suspectedCount" INTEGER NOT NULL DEFAULT 0 ,
    "suspectedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "virus" TEXT NOT NULL  ,
    PRIMARY KEY ("id"),FOREIGN KEY ("virus") REFERENCES "VirusInfo"("id") ON DELETE RESTRICT,
FOREIGN KEY ("country") REFERENCES "Country"("id") ON DELETE RESTRICT
) 

INSERT INTO "new_CountryRecord" ("confirmedAddCount","confirmedCount","continents","country","createdAt","curedAddCount","curedCount","deadAddCount","deadCount","id","recordAt","seriousAddCount","seriousCount","sourceUrl","suspectedAddCount","suspectedCount","updatedAt","virus") SELECT "confirmedAddCount","confirmedCount","continents","country","createdAt","curedAddCount","curedCount","deadAddCount","deadCount","id","recordAt","seriousAddCount","seriousCount","sourceUrl","suspectedAddCount","suspectedCount","updatedAt","virus" from "CountryRecord"

DROP TABLE "quaint"."CountryRecord";

ALTER TABLE "quaint"."new_CountryRecord" RENAME TO "CountryRecord";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_ProvinceRecord" (
    "confirmedCount" INTEGER NOT NULL DEFAULT 0 ,
    "confirmedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "country" TEXT NOT NULL  ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "curedCount" INTEGER NOT NULL DEFAULT 0 ,
    "curedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "deadCount" INTEGER NOT NULL DEFAULT 0 ,
    "deadCountY" INTEGER NOT NULL DEFAULT 0 ,
    "id" TEXT NOT NULL  ,
    "province" TEXT NOT NULL  ,
    "recordAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "sourceUrl" TEXT NOT NULL DEFAULT '' ,
    "suspectedCount" INTEGER NOT NULL DEFAULT 0 ,
    "suspectedCountY" INTEGER NOT NULL DEFAULT 0 ,
    "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "virus" TEXT NOT NULL  ,
    PRIMARY KEY ("id"),FOREIGN KEY ("province") REFERENCES "Province"("id") ON DELETE RESTRICT,
FOREIGN KEY ("virus") REFERENCES "VirusInfo"("id") ON DELETE RESTRICT,
FOREIGN KEY ("country") REFERENCES "Country"("id") ON DELETE RESTRICT
) 

INSERT INTO "new_ProvinceRecord" ("confirmedCount","country","createdAt","curedCount","deadCount","id","province","recordAt","sourceUrl","suspectedCount","updatedAt","virus") SELECT "confirmedCount","country","createdAt","curedCount","deadCount","id","province","recordAt","sourceUrl","suspectedCount","updatedAt","virus" from "ProvinceRecord"

DROP TABLE "quaint"."ProvinceRecord";

ALTER TABLE "quaint"."new_ProvinceRecord" RENAME TO "ProvinceRecord";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200210033401-add-comment-model..20200210033512-add-comment-model
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:new.db"
 }
 model User {
   avatar    Boolean  @default(false)
@@ -25,16 +25,34 @@
   country         Country
   cities          City[]
   provinceRecords ProvinceRecord[] @relation(references: [province])
   cityRecords     CityRecord[]
+
+  suspectedCount Int @default(0)
+  curedCount Int @default(0)
+  deadCount Int @default(0)
+  confirmedCount Int @default(0)
+  suspectedCountY Int @default(0)
+  curedCountY Int @default(0)
+  deadCountY Int @default(0)
+  confirmedCountY Int @default(0)
 }
 model City {
   id          String       @id
   title       String       @default("")
   province    Province
   areas       Area[]
   cityRecords CityRecord[] @relation(references: [city])
+
+  suspectedCount Int @default(0)
+  curedCount Int @default(0)
+  deadCount Int @default(0)
+  confirmedCount Int @default(0)
+  suspectedCountY Int @default(0)
+  curedCountY Int @default(0)
+  deadCountY Int @default(0)
+  confirmedCountY Int @default(0)
 }
 model Area {
   id    String @id
@@ -58,8 +76,16 @@
   provinces       Province[]       @relation(references: [country])
   countryRecords  CountryRecord[]  @relation(references: [country])
   provinceRecords ProvinceRecord[] @relation(references: [country])
   cityRecords     CityRecord[]
+  suspectedCount Int @default(0)
+  curedCount Int @default(0)
+  deadCount Int @default(0)
+  confirmedCount Int @default(0)
+  suspectedCountY Int @default(0)
+  curedCountY Int @default(0)
+  deadCountY Int @default(0)
+  confirmedCountY Int @default(0)
 }
 model CountryRecord {
   confirmedAddCount Int?
@@ -79,8 +105,13 @@
   suspectedCount    Int       @default(0)
   updatedAt         DateTime
   country           Country
   virus             VirusInfo
+
+  suspectedCountY Int @default(0)
+  curedCountY Int @default(0)
+  deadCountY Int @default(0)
+  confirmedCountY Int @default(0)
 }
 model ProvinceRecord {
   confirmedCount Int       @default(0)
@@ -94,8 +125,13 @@
   updatedAt      DateTime
   country        Country
   province       Province
   virus          VirusInfo
+
+  suspectedCountY Int @default(0)
+  curedCountY Int @default(0)
+  deadCountY Int @default(0)
+  confirmedCountY Int @default(0)
 }
 model CityRecord {
   confirmedCount Int       @default(0)
```

