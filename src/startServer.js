import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import 'dotenv/config';

export default function startServer({ typeDefs, resolvers }) {
  const DB_URL = process.env.DB_URL;
  const DB_NAME = process.env.DB_NAME;

  mongoose.connect(`${DB_URL}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = new ApolloServer({ typeDefs, resolvers });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🔥 Server Running on Port ${PORT}`));
}
