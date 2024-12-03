import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { NewToken } from '../target/types/new_token';

describe('new-token', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.NewToken as Program<NewToken>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
