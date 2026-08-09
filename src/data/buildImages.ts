import type { BuildKey } from './types';
import davidleutert from '@/assets/builds/davidleutert.webp';
import fritzloesel from '@/assets/builds/fritzloesel.webp';
import yosoytattoo from '@/assets/builds/yosoytattoo.webp';
import trazo from '@/assets/builds/trazo.webp';

/**
 * Screens from the projects currently in flight. These are our own builds, so
 * unlike `caseImages` they are interface screenshots rather than client
 * photographs — nothing here identifies a customer of the client.
 */
export const buildImages: Record<BuildKey, ImageMetadata> = {
  davidleutert,
  fritzloesel,
  yosoytattoo,
  trazo,
};
