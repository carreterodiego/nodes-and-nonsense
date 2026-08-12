// MOCK DEMO LINKS — placeholder connections for showcasing the map format.
// strength: 1 = loosely related, 2 = related, 3 = closely related / directly referenced

export const RAW_LINKS = [
  { source: "mock-origin-1",   target: "mock-origin-2",   strength: 3 },
  { source: "mock-origin-1",   target: "mock-measure-1",  strength: 2 },
  { source: "mock-measure-1",  target: "mock-measure-2",  strength: 3 },
  { source: "mock-origin-1",   target: "mock-voice-1",    strength: 1 },
  { source: "mock-voice-1",    target: "mock-voice-2",    strength: 2 },
  { source: "mock-disaster-1", target: "mock-disaster-2", strength: 3 },
  { source: "mock-disaster-2", target: "mock-complex-1",  strength: 1 },
  { source: "mock-complex-1",  target: "mock-complex-2",  strength: 3 },
  { source: "mock-complex-2",  target: "mock-disaster-2", strength: 2 },
  { source: "mock-measure-2",  target: "mock-voice-2",    strength: 1 },
];
