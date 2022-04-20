/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Code` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `Country` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Account` table. All the data in the column will be lost.
  - The `id` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `contact_id` on the `Form` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `account_id` on the `Contact` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `account_id` on the `Website` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_account_id_fkey";

-- DropForeignKey
ALTER TABLE "Website" DROP CONSTRAINT "Website_account_id_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "Code",
DROP COLUMN "Country",
DROP COLUMN "State",
ADD COLUMN     "code" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "state" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "form_id" INTEGER,
ADD COLUMN     "last_name" TEXT NOT NULL,
DROP COLUMN "account_id",
ADD COLUMN     "account_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "contact_id",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Website" DROP COLUMN "account_id",
ADD COLUMN     "account_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,
    "from_id" INTEGER NOT NULL,
    "submittedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Website" ADD CONSTRAINT "Website_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
