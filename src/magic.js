import { Magic } from 'magic-sdk';
import { FarcasterExtension } from "@magic-ext/farcaster"

export const magic = new Magic("pk_live_8817DB7D59D6EC21", {
  extensions: [new FarcasterExtension()]
})