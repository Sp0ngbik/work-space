const mysql = require("mysql");

//config

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users_test",
  password: "",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("db - ok");
  }
});

let query = "SELECT * FROM user_db";
//1-запрос, 2-ф-ия обработчик результата
let connectionStatus = connection.query(query, (err, result, fields) => {
  //   console.log(err);
  //   console.log(result[0]["lastName"]);
  //   console.log(result[1]["lastName"]);
  console.log(result);

  //   console.log(fields);
});

//закрытие соединения(без ассинхронности, т.е. закрытие лучше делать через условие)

if (connectionStatus) {
  connection.end((err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("db - closed");
    }
  });
} else {
  console.log("no connection");
}

// connection.end((err) => {
//   if (err) {
//     console.log(err);
//     return err;
//   } else {
//     console.log("db - closed");
//   }
// });
