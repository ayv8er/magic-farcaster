import { Magic } from 'magic-sdk';
import { FarcasterExtension } from "@magic-ext/farcaster"

export const magic = new Magic("pk_live_93E8CF8432A77D89", {
  extensions: [new FarcasterExtension()]
})