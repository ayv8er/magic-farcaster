import { Magic } from 'magic-sdk';
import { FarcasterExtension } from "@magic-ext/farcaster"

export const magic = new Magic("pk_live_735B20368BD2D172", {
  extensions: [new FarcasterExtension()]
})