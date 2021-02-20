const express = require('express');
const exphbs = require('express-handlebars');
const generator = require('generate-password');

const PORT = process.env.PORT || 8080;

const app = express();

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('*', (_, res) => {
  const password = generator.generate({
    length: 10,
    numbers: true,
  });

  res.render('password', { password });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
