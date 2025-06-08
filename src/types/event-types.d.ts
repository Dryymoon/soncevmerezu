export type EventMap = {
  communityCreated: [communityId: number];
  deleteEntityRequest: [{ name: string; description: string; deleteUrl: string }];
  deleteEntitySuccess: [{ name: string }];
};

export type EventT<K extends keyof EventMap = keyof EventMap> = [K, ...EventMap[K]];
