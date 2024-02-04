/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// const argon = require("argon2");
// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate items");

    // Insert fake data into the 'item' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query("insert into items(title) values (?)", [
    //       faker.lorem.word(),
    //     ])
    //   );
    // }

    // const hardskills = [
    //    {Name: "HTML",
    //    Name: "CSS",
    //    Name: "JAVASCRIPT",
    //    Name: "REACT",
    //    Name: "OFFICE",
    //    Name: "YPOLICE"},
    //    Name: "SELFDEFENCE",
    //    Name: "SSIAP"}
    // ]

    // const softskills = [
    //   { Name: "AUTONOMIE",
    //    Name: "FLEXIBILITE",
    //    Name: "RIGUEUR",
    //    Name: "REACTIVITE",
    //    Name: "POLYVALANCE"},
    // ]

    // const categorie = [
    //   {Name: "COMPTABILITE",
    //    Name: "DEVELOPPEUR",
    //    Name: "AGENT SECURITE",
    //    Name: "REACTIVITE",
    //    Name: "POLYVALANCE"},
    // ]
    // const users = [
    //   {
    //     Firstname: "Jean",
    //     Lastname: "Claude",
    //     Email: "jc@example.com",
    //     Matricule: "666",
    //     Password: "jean",
    //     Phone: "0622446688",
    //     Seniority: "2024-01-01",
    //     Admin: 1,
    //     Picture: "x",
    //     Introduction: "test",
    //   },
    //   {
    //     Firstname: "Lu",
    //     Lastname: "Cas",
    //     Email: "Lc@example.com",
    //     Matricule: "777",
    //     Password: "lucas",
    //     Phone: "0610101010",
    //     Seniority: "2024-04-04",
    //     Admin: 0,
    //     Picture: "x",
    //     Introduction: "test 2",
    //   },
    // ];

    // const offers = [
    //   {
    //     Date_of_publication: "2024-03-03",
    //     Post_title: "Developpeur",
    //     Description: "teste seed1",
    //     Training: false,
    //     Level: "1ans",
    //     Domaine: "",
    //     Locaction: "Paris",
    //     Logo: "picture",
    //   },
    //   {
    //     Date_of_publication: "2024-03-03",
    //     Post_title: "Comptable",
    //     Description: "teste seed2",
    //     Training: true,
    //     Level: "2ans",
    //     Domaine: "",
    //     Locaction: "Lille",
    //     Logo: "picture",
    //   },
    // ];

    // for (let i = 0; i < offers.length; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into offers (Date_of_publication,Post_title, Description,Training,Level,Domaine,Locaction,Logo, ) values (?,?,?,?,?,?,?,?)",
    //       [
    //         // Date_of_publication[i].Date_of_publication,
    //         // Post_title[i].Post_title,
    //         // Description[i].Description,
    //         // Training[i].Training,
    //         // Level[i].Level,
    //         // Domaine[i].Domaine,
    //         // Locaction[i].Locaction,
    //         // Logo[i].Logo,
    //       ]
    //     )
    //   );
    // }

    // const hashingOptions = {
    //   type: argon.argon2id,
    //   memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
    //   timeCost: 2,
    //   parallelism: 1,
    // };

    // for (let i = 0; i < users.length; i += 1) {
    //   const hash = await argon.hash(users[i].Password, hashingOptions);
    //   queries.push(
    //     database.query(
    //       "insert into users (Lastname, Firstname, Matricule, Password, Email, Phone, Seniority, Admin, Picture, Introduction) values (?,?,?,?,?,?,?,?,?,?)",
    //       [
    //         users[i].Lastname,
    //         users[i].Firstname,
    //         users[i].Matricule,
    //         hash,
    //         users[i].Email,
    //         users[i].Phone,
    //         users[i].Seniority,
    //         users[i].Admin,
    //         users[i].Picture,
    //         users[i].Introduction,
    //       ]
    //     )
    //   );
    // }
    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} update from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
