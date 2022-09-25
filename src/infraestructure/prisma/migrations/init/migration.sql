CREATE TABLE "Passenger" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "blocked" BOOLEAN,
    "wallet" VARCHAR(255),

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_email_key" ON "Passenger"("email");

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "blocked" BOOLEAN,
    "wallet" VARCHAR(255),
    "vehicle" VARCHAR(255),

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateTable
CREATE TABLE "DriverVehicle" (
    "domain" VARCHAR(255) NOT NULL,
    "modelYear" VARCHAR(255),
    "color" VARCHAR(255),
    "vehicle" SERIAL NOT NULL,

    CONSTRAINT "DriverVehicle_pkey" PRIMARY KEY ("domain")
);

-- CreateIndex
CREATE UNIQUE INDEX "DriverVehicle_key" ON "DriverVehicle"("domain");

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(255),
    "model" VARCHAR(255),
    "image" VARCHAR(255),

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_key" ON "Vehicle"("id");


-- CreateTable
CREATE TABLE "Wallet" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255),
    "privateKey" VARCHAR(255) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_key" ON "Wallet"("id");
