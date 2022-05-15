const mysql = require("mysql2/promise");
const config = require("./db");

async function mainConnection() {
  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute("select * from user_db");
  console.log(rows);
  //   await connection.execute(
  //     `update user_db set firstName="Vladislav" where id = 1`
  //   );
  //   await connection.execute(
  //     "INSERT INTO `user_db` (`id`, `firstName`, `lastName`, `email`, `date`) VALUES (NULL, 'Oleg', 'Ovodok', 'lol@mail.ru', current_timestamp())"
  //   );
  connection.end();
  return rows;
}

mainConnection();

//other method
// const connection = mysql.createConnection(config);

// connection.connect((err) => {
//   if (err) {
//     console.log("db-false");
//   } else {
//     console.log("db-ok");
//   }
// });

// let querySelectAll = "SELECT * FROM user_db";

// let connectionStatus = connection.query(
//   querySelectAll,
//   (err, result, fields) => {
//     console.log(err);
//     console.log(result);
//     // console.log(fields)
//   }
// );

// if (connectionStatus) {
//   connection.end((err) => {
//     if (err) {
//       console.log("db-close-fail");
//     } else {
//       console.log("db-close");
//     }
//   });
// } else {
//   console.log("connection status failed");
// }
