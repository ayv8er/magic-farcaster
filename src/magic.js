import { Magic } from 'magic-sdk';
import { FarcasterExtension } from "@magic-ext/farcaster"

export const magic = new Magic("pk_live_7F3EECC62E22CD7C", {
  extensions: [new FarcasterExtension()]
})