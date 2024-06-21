import { Magic } from 'magic-sdk';
import { FarcasterExtension } from "@magic-ext/farcaster"

export const magic = new Magic("pk_live_4B3A5777BFD8FAF7", {
  extensions: [new FarcasterExtension()]
})