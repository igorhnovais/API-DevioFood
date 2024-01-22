-- CreateTable
CREATE TABLE "finishes" (
    "id" SERIAL NOT NULL,
    "nameCustomer" VARCHAR(50) NOT NULL,
    "isFinish" BOOLEAN NOT NULL,
    "isREady" BOOLEAN NOT NULL,

    CONSTRAINT "finishes_pkey" PRIMARY KEY ("id")
);
