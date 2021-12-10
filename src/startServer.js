import { ApolloServer } from 'apollo-server';
import 'dotenv/config';

export default function startServer({ typeDefs, resolvers }) {
  const app = new ApolloServer({ typeDefs, resolvers });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🔥 Server Running on Port ${PORT}`));
}
